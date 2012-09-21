# Express Mobile Detection

[![Build Status](https://secure.travis-ci.org/sprice/express-mobile-detection.png)](http://travis-ci.org/sprice/express-mobile-detection)

[Express](http://expressjs.com/) middleware which uses the client useragent to detect mobile and tablet devices.

Adds `mobile` and `tablet` properties to `req`.

## Note

It is not always wise to rely on useragents to determine mobile and tablet clients.

## Usage

For all routes.

    var checkMobile = require('express-mobile-detection');
    ...
    app.use(checkMobile());
    ...
    // Within any route.
      console.log(req.mobile);
      console.log(req.tablet);

For single routes.

    var checkMobile = require('express-mobile-detection');
    ...
    app.get('/', checkMobile(), function (req, res) {
      console.log(req.mobile);
      console.log(req.tablet);
    });

## License

Licensed MIT unless otherwise noted. See LICENSE file.

This module uses public domain code from Chad Smith's [detectmobilebrowsers.com](http://detectmobilebrowsers.com/) project.
