import { browser } from "protractor";


export class ElementExtensions {

  highlightElement(element: any) {

    browser.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 3px solid red;');", element);
    return element;

  };

  checkElement(element: any) {
    var bool;
    if (element.isDisplayed()) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  };


};

//module.exports = ElementExtensions
