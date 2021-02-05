import { browser, by, element, ExpectedConditions } from "protractor";
import { ElementExtensions } from "../utilities/ElementExtension";

export class Cart {

  addItemToCart() {
    var myUtilities = new ElementExtensions();
    var addCart = element(by.xpath("//span[contains(text(),'Add to cart')]"));
    browser.wait(ExpectedConditions.visibilityOf(myUtilities.highlightElement(addCart)), 30000);
    addCart.click();
    return addCart;
  };

  exitPopUp() {
    var myUtilities = new ElementExtensions();
    var popup = element(by.css("span[class='cross'][title='Close window']"));
    browser.wait(ExpectedConditions.visibilityOf(myUtilities.highlightElement(popup)), 30000);
    popup.click();
    return popup;
  };

   productsOnCart() {
    var myUtilities = new ElementExtensions();
    var cart = element(by.css("a[title='View my shopping cart']"));
    browser.wait(ExpectedConditions.visibilityOf(myUtilities.highlightElement(cart)), 30000);
    cart.click();
    return cart;
  };

  btnDelete() {
    var myUtilities = new ElementExtensions();
    var btnDel = myUtilities.highlightElement(element(by.css("a[title='Delete'][class='cart_quantity_delete']")));
    return btnDel;
  };

  emptyCart() {
    var myUtilities = new ElementExtensions();
    var empty = myUtilities.highlightElement(element(by.xpath("//p[contains(text(),'Your shopping cart is empty.')]")));
    return empty;
  };


};
