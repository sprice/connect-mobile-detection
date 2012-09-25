# Connect Mobile Detection

[![Build Status](https://secure.travis-ci.org/sprice/connect-mobile-detection.png)](http://travis-ci.org/sprice/connect-mobile-detection)

[Connect](http://www.senchalabs.org/connect/) middleware which uses the client useragent to detect mobile and tablet devices.

Adds boolean `mobile` and `tablet` properties to `req`.

## Note

It is not always wise to rely on useragents to determine mobile and tablet clients.

## Usage

For all routes.

    var checkMobile = require('connect-mobile-detection');
    ...
    app.use(checkMobile());
    ...
    // Within any route.
      console.log(req.mobile);
      console.log(req.tablet);

For single routes using [Express](http://expressjs.com/).

    var checkMobile = require('connect-mobile-detection');
    ...
    app.get('/', checkMobile(), function (req, res) {
      console.log(req.mobile);
      console.log(req.tablet);
    });

## License

Licensed MIT unless otherwise noted. See LICENSE file.

This module uses public domain code from Chad Smith's [detectmobilebrowsers.com](http://detectmobilebrowsers.com/) project.
