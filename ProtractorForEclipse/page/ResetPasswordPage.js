let applogger = require('./../utils/applogger.js') 
var ResetPasswordPage = function() {
    
    this.resetPassword = function(email) {
	
        element(by.linkText('Sign in')).click() 
        element(by.linkText('Forgot password?')).click()
        applogger.log('forgot password link clicked')
        element(by.id('email_field')).clear()
        element(by.id('email_field')).sendKeys(email)
        applogger.log('email entered')
        element(by.name('commit')).click()     
        applogger.log('send password rest button clicked')        
        return element(by.id('js-flash-container')).getText()    
    }
}
module.exports = new ResetPasswordPage()