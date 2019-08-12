let HomePage = require('../page/HomePage.js')
let SigninPage = require('../page/SigninPage.js')
let ResetPasswordPage = require('../page/ResetPasswordPage.js')
let SignupPage = require('../page/SignupPage.js')
let Constants = require('../utils/constants.js')
describe('Github spec', function(){

    beforeEach(function() {
        HomePage.loadPage('https://github.com')
    })  

    it('Verify by clicking sigin redirects to login page', function(){                 
        expect(SigninPage.signin() ).toEqual(Constants.SIGIN_PAGE_TITLE)     
    });

    it('Verify username and password fields in login page', function() {
        expect(SigninPage.signinWithEmptyCredentials()).toEqual(Constants.INCORRECT_CREDENTIALS)
    })

    it('Verify invalid email in reset_password page', function() {       
        expect(ResetPasswordPage.resetPassword(Constants.NEW_EMAIL)).toEqual(Constants.CANT_FIND_EMAIL)
    })

    it('Verify empty email in reset_password page', function() {         
        expect(ResetPasswordPage.resetPassword(' ')).toEqual(Constants.CANT_FIND_EMAIL)
       
    })

    it('Verify can\'t string at error message in reset_password page', function() {
        ResetPasswordPage.resetPassword(' ').then(function(errorMessage) {            
            expect(errorMessage.toString().split(" ")[0]).toEqual(Constants.CANT)            
        })                
    })

    it('Verify Signup page title', function(){   
        expect(SignupPage.signupPageTitle()).toEqual(Constants.SIGUP_PAGE_TITLE)               
    });

    it('Verify Signup page header', function(){   
        expect(SignupPage.signupPageHeader()).toEqual(Constants.SIGUP_PAGE_HEADER)                   
    });

    it('Verify Signup button enabled for valid user details', function(){         
        expect(SignupPage.isSignupButtonEnabled(Constants.NEW_EMAIL)).toEqual(true)                 
    });

    it('Verify Signup button disabled for existing email entered', function(){        
        expect(SignupPage.isSignupButtonEnabled(Constants.EXISTING_EMAIL)).toEqual(false)          
    });        
});