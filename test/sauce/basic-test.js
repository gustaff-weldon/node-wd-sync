// Generated by CoffeeScript 1.6.2
(function() {
  var TIMEOUT, config, err, getDesired, should, testCurrent, testWithBrowser, _ref;

  _ref = require('../common/basic-test-base'), testWithBrowser = _ref.testWithBrowser, testCurrent = _ref.testCurrent;

  should = require('should');

  config = null;

  try {
    config = require('./config');
  } catch (_error) {
    err = _error;
  }

  TIMEOUT = 180000;

  config = config.saucelabs;

  config.host = "ondemand.saucelabs.com";

  config.port = 80;

  getDesired = function(browserName, name) {
    var desired;

    desired = {
      platform: "LINUX",
      name: name
    };
    if (browserName != null) {
      desired.browserName = browserName;
    }
    if (browserName === 'IE') {
      desired.browserName = 'iexplore';
      desired.version = '9';
      desired.platform = 'VISTA';
    }
    return desired;
  };

  describe("wd-sync", function() {
    return describe("sauce", function() {
      var browserName, _i, _len, _ref1;

      describe("sauce config", function() {
        return it("should have sauce config", function(done) {
          should.exist(config, 'you need to configure your sauce username and access-key ' + 'in the file config.coffee.');
          return done();
        });
      });
      _ref1 = ['chrome', 'IE'];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        browserName = _ref1[_i];
        testWithBrowser({
          type: 'remote',
          timeout: TIMEOUT,
          remoteConfig: config,
          desired: getDesired(browserName, "basic test with " + browserName)
        });
      }
      return testCurrent({
        type: 'remote',
        timeout: TIMEOUT,
        remoteConfig: config,
        desired: getDesired('chrome', "wd.current()")
      });
    });
  });

}).call(this);
