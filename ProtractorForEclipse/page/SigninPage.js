let applogger = require('./../utils/applogger.js')
let SigninPage = function() {  
    "use strict";
    this.signin = function() {               
        element(by.linkText('Sign in')).click() 
        applogger.log('sign in clicked')  
        return browser.getTitle()     
    }
    this.signinWithEmptyCredentials = function() {  
        element(by.linkText('Sign in')).click()
        applogger.log('sign in clicked')  
        element(by.name('commit')).click()
        applogger.log('sign up clicked')    
        return element(by.id('js-flash-container')).getText()
    }
}

module.exports = new SigninPage()
