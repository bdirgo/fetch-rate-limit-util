

/**
 * 
 */
export const MIN_WAIT_MSECS = 10000;

/**
 * max # of wait retires
 */
export const MAX_RETRIES = 5;

/**
 * Decide about the time to wait for a retry
 * - only retry {@link MAX_RETRIES} times
 * - when waiting wait at least {@link MIN_WAIT_MSECS}
 * @param {Integer} millisecondsToWait
 * @param {Integer} rateLimitRemaining parsed from "x-ratelimit-remaining" header
 * @param {Integer} nthTry how often have we retried the request already
 * @param {Object} response as returned from fetch
 * @return {Integer} milliseconds to wait for next try or < 0 to deliver current response
 */
export function defaultWaitDecide(
  millisecondsToWait,
  rateLimitRemaining,
  nthTry,
  response
) {
  if (nthTry > MAX_RETRIES) return -1;

  return millisecondsToWait + MIN_WAIT_MSECS;
}

/**
 * Waits and retries after rate limit rest time has reached.
 * @see https://auth0.com/docs/policies/rate-limit-policy
 * @see https://developer.github.com/v3/#rate-limiting
 * @see https://opensource.zalando.com/restful-api-guidelines/#153
 * @param fetcher executes the fetch operation
 * @param waitDecide
 */
export async function rateLimitHandler(fetcher, waitDecide = defaultWaitDecide) {
  for (let i = 0; ; i++) {
    const response = await fetcher();

    switch (response.status) {
      default:
        return response;

      case 403:
      case 429:
        const rateLimitReset = parseInt(
          response.headers.get("x-ratelimit-reset")
        );

        let millisecondsToWait = isNaN(rateLimitReset)
          ? 0
          : new Date(rateLimitReset * 1000).getTime() - Date.now();

        millisecondsToWait = waitDecide(
          millisecondsToWait,
          parseInt(response.headers.get("x-ratelimit-remaining")),
          i,
          response
        );
        if (millisecondsToWait <= 0) {
          return response;
        }
        await new Promise(resolve => setTimeout(resolve, millisecondsToWait));
    }
  }
}
