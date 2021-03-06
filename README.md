[![npm](https://img.shields.io/npm/v/fetch-rate-limit-util.svg)](https://www.npmjs.com/package/fetch-rate-limit-util)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/fetch-rate-limit-util)](https://bundlephobia.com/result?p=fetch-rate-limit-util)
[![downloads](http://img.shields.io/npm/dm/fetch-rate-limit-util.svg?style=flat-square)](https://npmjs.org/package/fetch-rate-limit-util)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/fetch-rate-limit-util.svg?style=flat-square)](https://github.com/arlac77/fetch-rate-limit-util/issues)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Farlac77%2Ffetch-rate-limit-util%2Fbadge&style=flat)](https://actions-badge.atrox.dev/arlac77/fetch-rate-limit-util/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/fetch-rate-limit-util/badge.svg)](https://snyk.io/test/github/arlac77/fetch-rate-limit-util)
[![Coverage Status](https://coveralls.io/repos/arlac77/fetch-rate-limit-util/badge.svg)](https://coveralls.io/github/arlac77/fetch-rate-limit-util)

# fetch-rate-limit-util

Handle fetch rate limits.
Waits and retries after rate limit rest time has reached

-   [auth0 API](https://auth0.com/docs/policies/rate-limit-policy)
-   [github API](https://developer.github.com/v3/#rate-limiting)
-   [Zalando API](https://opensource.zalando.com/restful-api-guidelines/#153)

```js
import { rateLimitHandler } from "fetch-rate-limit-util";

const response = rateLimitHandler( () => fetch(someURL));
```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [MIN_WAIT_MSECS](#min_wait_msecs)
-   [MAX_RETRIES](#max_retries)
-   [defaultWaitDecide](#defaultwaitdecide)
    -   [Parameters](#parameters)
-   [rateLimitHandler](#ratelimithandler)
    -   [Parameters](#parameters-1)

## MIN_WAIT_MSECS

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

## MAX_RETRIES

max # of wait retires

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

## defaultWaitDecide

Decide about the time to wait for a retry

-   only retry [MAX_RETRIES](#max_retries) times
-   when waiting wait at least [MIN_WAIT_MSECS](#min_wait_msecs)

### Parameters

-   `millisecondsToWait` **Integer** 
-   `rateLimitRemaining` **Integer** parsed from "x-ratelimit-remaining" header
-   `nthTry` **Integer** how often have we retried the request already
-   `response` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** as returned from fetch

Returns **Integer** milliseconds to wait for next try or &lt; 0 to deliver current response

## rateLimitHandler

-   **See: <https://auth0.com/docs/policies/rate-limit-policy>
    **
-   **See: <https://developer.github.com/v3/#rate-limiting>
    **
-   **See: <https://opensource.zalando.com/restful-api-guidelines/#153>
    **

Waits and retries after rate limit rest time has reached.

### Parameters

-   `fetcher`  executes the fetch operation
-   `waitDecide`   (optional, default `defaultWaitDecide`)

# install

With [npm](http://npmjs.org) do:

```shell
npm install fetch-rate-limit-util
```

# license

BSD-2-Clause
