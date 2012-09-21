# Express Mobile Detection

[![Build Status](https://secure.travis-ci.org/sprice/express-mobile-detection.png)](http://travis-ci.org/sprice/express-mobile-detection)

[Express](http://expressjs.com/) middleware which uses the client useragent to detect mobile and tablet devices.

## Note

It is not always wise to rely on useragents to determine mobile and tablet clients.

## Usage

For all routes.

    checkMobile = require('express-mobile-detection');
    ...
    app.use(checkMobile());

For single routes.

    checkMobile = require('express-mobile-detection');
    ...
    app.get('/', checkMobile(), function (req, res) {
      console.log(req.mobile);
      console.log(req.tablet);
    });

## License

Licensed MIT unless otherwise noted. See LICENSE file.

This module uses public domain code from Chad Smith's [detectmobilebrowsers.com](http://detectmobilebrowsers.com/) project.
