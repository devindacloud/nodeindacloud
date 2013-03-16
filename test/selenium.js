var config = require('../config'),
    webdriver = require('wd'),
    assert = require('assert');

var browser = webdriver.remote(
  "ondemand.saucelabs.com"
  , 80
  , config.get('saucelabsUser')
  , config.get('saucelabsToken')
);

browser.on('status', function(info){
  console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

var desired = {
  browserName: 'firefox'
  , tags: ["examples"]
  , name: "This is an example test"
}

browser.init(desired, function() {
  browser.get(config.get('seleniumTargetUrl'), function() {
    browser.eval("window.document.body.innerHTML", function(err, bodyText) {
        assert.ok(bodyText == 'Hello World', 'Text in body is not "Hello World" but "' + bodyText + '"');
        browser.quit()
    })
  })
})

