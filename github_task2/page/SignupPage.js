let applogger = require('./../utils/applogger.js')
var SignupPage = function() {   

     this.signupPageTitle = function() {
        element(by.linkText('Sign up')).click()   
        applogger.log('sigun up link cliked')   
        return browser.getTitle() 
    }

    this.signupPageHeader = function() {
        element(by.linkText('Sign up')).click() 
        applogger.log('sigun up link cliked')  
        return element(by.css('#signup-form h2')).getText()                  
    }

    this.isSignupButtonEnabled = function(email) {    
        element(by.linkText('Sign up')).click()    
        element(by.id('user_login')).sendKeys('randomsample4t53')  
        element(by.id('user_email')).clear()  
        element(by.id('user_email')).sendKeys(email)
        element(by.id('user_password')).sendKeys('securepswd12345!')
        applogger.log('user details entered')  
        browser.sleep(3000)       
        return element(by.id('signup_button')).isEnabled()                      
    }
}

module.exports = new SignupPage()

