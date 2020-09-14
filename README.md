[![npm](https://img.shields.io/npm/v/fetch-rate-limit-util.svg)](https://www.npmjs.com/package/fetch-rate-limit-util)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/fetch-rate-limit-util)](https://bundlephobia.com/result?p=fetch-rate-limit-util)
[![downloads](http://img.shields.io/npm/dm/fetch-rate-limit-util.svg?style=flat-square)](https://npmjs.org/package/fetch-rate-limit-util)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/fetch-rate-limit-util.svg?style=flat-square)](https://github.com/arlac77/fetch-rate-limit-util/issues)
[![Build Status](https://travis-ci.com/arlac77/fetch-rate-limit-util.svg?branch=master)](https://travis-ci.com/arlac77/fetch-rate-limit-util)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/fetch-rate-limit-util.git)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/fetch-rate-limit-util/badge.svg)](https://snyk.io/test/github/arlac77/fetch-rate-limit-util)
[![Coverage Status](https://coveralls.io/repos/arlac77/fetch-rate-limit-util/badge.svg)](https://coveralls.io/r/arlac77/fetch-rate-limit-util)

# fetch-rate-limit-util

handle fetch rate limits


- [auth0](https://auth0.com/docs/policies/rate-limit-policy)
- [github API](https://developer.github.com/v3/#rate-limiting)
- [Zalando API](https://opensource.zalando.com/restful-api-guidelines/#153)

```js
import {} from "fetch-rate-limit-util";

const response = rateLimitHandler( () => fetch(someURL));

```

# API


# install

With [npm](http://npmjs.org) do:

```shell
npm install fetch-rate-limit-util
```

# license

BSD-2-Clause
