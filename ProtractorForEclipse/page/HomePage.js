let applogger = require('./../utils/applogger.js')
let appconfig = require('./../config/appconfig.js').config
let HomePage = function() { 
    this.loadPage = function() {
        browser.waitForAngularEnabled(false);
        browser.get(appconfig.baseUrl)
        browser.manage().window().maximize()
        browser.manage().timeouts().setScriptTimeout(10000)
        applogger.log('page loaded')
    }
}
module.exports = new HomePage() 