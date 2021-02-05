//Usually import on TS
import { browser, by, element } from "protractor";
import { Home } from "../pages/Home";

//MOCHA 
describe('CHECKING FOOTER', (): void => {
  //Objects for access to the objects
  var homePage = new Home();
  var footer = element(by.css("#block_contact_infos"));
  const should = chai.should();


  it('Checking Store Info at Footer', () => {
    browser.actions().mouseMove(footer).perform();
    homePage.footerInfo(1).should.eventually.equal("Selenium Framework, Research Triangle Park, North Carolina, USA");
    homePage.footerInfo(2).should.eventually.equal("(347) 466-7432");
    homePage.footerInfo(3).should.eventually.equal("support@seleniumframework.com");
  });

});
