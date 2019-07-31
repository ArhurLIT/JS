// library required for generate html report
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// protractor sepecific configuration
exports.config= {    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',    
    specs: ['./../specs/spec.js'],   
    baseUrl: 'https://github.com',
    onPrepare: function() {
       // set report path
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
           savePath: './reports/screenshots',
           cleanDestination: true,           
           takeScreenshotsOnlyOnFailures: false
              
        }))
     } 
}