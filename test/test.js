var mobile_detection = require('../')()
  , assert = require('assert')
  , useragents = require('./useragents');

function MockRequest() {
  this.headers = {};
  this.headers['user-agent'] = '';
}

function MockResponse() {}

function next() {}

describe('Clients with no useragents', function () {

  it('should not fail', function (done) {

    var req = new MockRequest();
    var res = new MockResponse();
    req.headers['user-agent'] = undefined;

    mobile_detection(req, res, next);

    done();

  });
});

describe('Mobile useragents', function () {

  it('should be mobile and phone but not tablet', function (done) {

    for (var agent_index = 0; agent_index < useragents.mobile.length; agent_index++) {
    
      var req = new MockRequest();
      var res = new MockResponse();
      req.headers['user-agent'] = useragents.mobile[agent_index];

      mobile_detection(req, res, next);

      assert.equal(req.mobile, true);
      assert.equal(req.phone, true);
      assert.equal(req.tablet, false);
    }

    done();

  });
});

describe('Tablet useragents', function () {

  it('should be mobile and tablet but not phone', function (done) {

    for (var agent_index = 0; agent_index < useragents.tablet.length; agent_index++) {
    
      var req = new MockRequest();
      var res = new MockResponse();
      req.headers['user-agent'] = useragents.tablet[agent_index];

      mobile_detection(req, res, next);

      assert.equal(req.mobile, true);
      assert.equal(req.phone, false);
      assert.equal(req.tablet, true);
    }

    done();

  });
});

describe('Desktop useragents', function () {

  it('should not be mobile, phone or tablet', function (done) {

    for (var agent_index = 0; agent_index < useragents.desktop.length; agent_index++) {
    
      var req = new MockRequest();
      var res = new MockResponse();
      req.headers['user-agent'] = useragents.desktop[agent_index];

      mobile_detection(req, res, next);

      assert.equal(req.mobile, false);
      assert.equal(req.phone, false);
      assert.equal(req.tablet, false);
    }

    done();

  });
});
