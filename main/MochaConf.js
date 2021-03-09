exports.config = {
    directConnect: true,
    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec', slow: 3000, timeout: 30000, ui: 'bdd'
    },
    multiCapabilities: [
        { 'browserName': 'chrome' },
    ],
    beforeLaunch: function () {
        require('ts-node').register({
            project: '../tsconfig.json'
        });
    },
    onPrepare: () => {
        //Let
        var globals = require("protractor");
        browser.driver.get("http://automationpractice.com/index.php");
        browser.manage().window().maximize();
        //Only for non-angular applications
        //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        //Until here
        global.browser = globals.browser;

        var chai = require("chai");
        var chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);
        global.chai = chai;

    },
    suites: {
        FullSuite: ['test/ProductFlow.ts','test/FooterInfo.ts']
        //mochaTest: 'test/FooterInfo.ts'
    }

}