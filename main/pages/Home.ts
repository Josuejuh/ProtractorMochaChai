import { by, element } from "protractor";
import { ElementExtensions } from "../utilities/ElementExtension";

// var Home = function (this: any) {

//   var myUtilities = new ElementExtensions();
//   var searchBar = element(by.id('search_query_top'));
//   var searchButton = element(by.name('submit_search'));

//   this.searchProcess = function (chain: string) {
//     myUtilities.highlightElement(searchBar).clear();
//     myUtilities.highlightElement(searchBar).sendKeys(chain);
//     myUtilities.highlightElement(searchButton).click();

//   };

//   this.footerInfo = function (element: any, chain: string) {
//     return myUtilities.highlightElement(element(by.xpath("//*[contains(text(),'" + chain + "')]")));
//   };

// };

// module.exports = Home

export class Home {


  searchProcess(chain: string) {
    var myUtilities = new ElementExtensions();
    var searchBar = element(by.id('search_query_top'));
    var searchButton = element(by.name('submit_search'));

    myUtilities.highlightElement(searchBar).clear();
    myUtilities.highlightElement(searchBar).sendKeys(chain);
    myUtilities.highlightElement(searchButton).click();

  };

  footerInfo(order: number) {
    var myUtilities = new ElementExtensions();
    var footLocator;
    if (order == 1) {
      footLocator = myUtilities.highlightElement(element(by.xpath("//section[@id='block_contact_infos']/div[1]/ul[1]/li[1]")));
    }
    if (order == 2) {
      footLocator = myUtilities.highlightElement(element(by.xpath("//section[@id='block_contact_infos']/div[1]/ul[1]/li[2]/span[1]")));
    }
    if (order == 3) {
      footLocator = myUtilities.highlightElement(element(by.xpath("//section[@id='block_contact_infos']/div[1]/ul[1]/li[3]/span[1]/a[1]")));
    }
    return footLocator.getText();

  };

};

