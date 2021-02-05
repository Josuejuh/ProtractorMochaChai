//Usually import on TS
import { browser, by, element, ExpectedConditions } from "protractor";
import { ElementExtensions } from "../utilities/ElementExtension";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
//Usually import on JS
//var home = require('../pages/Home.ts');

//MOCHA 
describe('PRODUCT FLOW', (): void => {
  //Objects for access to the objects
  var cartHandle = new Cart();
  var homePage = new Home();
  var myUtilities = new ElementExtensions();
  //Locators
  var negativeResult = element(by.xpath("//p[contains(text(),'No results were found for your search')]"));
  var positiveResult = element(by.xpath("//ul[@class='product_list grid row']/li[1]"));


  it('Searching process (Negative)', () => {
    //Call function to search on webPage
    homePage.searchProcess('#');
    //Wait until the visibility of a 
    browser.wait(ExpectedConditions.visibilityOf(myUtilities.highlightElement(negativeResult)), 30000);
    chai.assert.isTrue(myUtilities.checkElement(negativeResult));
  });

  it('Searching process (Positive)', () => {
    homePage.searchProcess('dress');
    browser.wait(ExpectedConditions.visibilityOf(myUtilities.highlightElement(positiveResult)), 30000);
    chai.assert.isTrue(myUtilities.checkElement(positiveResult));
    //negativeResult.isEnabled
  });

  it('Add item to cart', () => {
    positiveResult.click();
    cartHandle.addItemToCart();
    cartHandle.exitPopUp();
    cartHandle.productsOnCart();
    browser.wait(ExpectedConditions.visibilityOf((cartHandle.btnDelete())), 30000);
  });

  it('Remove item from cart', () => {
    cartHandle.btnDelete().click();
    browser.wait(ExpectedConditions.invisibilityOf((cartHandle.btnDelete())), 30000);
    chai.assert.isTrue(myUtilities.checkElement(cartHandle.emptyCart()));

  });

});
