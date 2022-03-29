const Page = require('./page');

const selectors = {
  list: '.b-list__items_nofooter',
  items: 'li.s-item--large',
  itemTitle: 'h3.s-item__title',
  itemPrice: 'span.s-item__price',
  paginationItem: 'ol.pagination__items'
}

class SearchPage extends Page {

  async getAllItems() {
    $(selectors.list).waitForDisplayed();
    await browser.waitUntil(
      async () => await $$(selectors.items).length > 1
    )
    return $$(selectors.items);
  }

  async storeInfoAllItems() {
    const listOfElements = await this.getAllItems();
    const promises = listOfElements.map(async element => {
      const title = await element.$(selectors.itemTitle).getText();
      const price = await element.$(selectors.itemPrice).getText();
      return {title, price}
    });
    return Promise.all(promises);
  }

  async choosePage(number) {
    await $(selectors.paginationItem).$(`li*=${number}`).click();
  }
}

module.exports = new SearchPage();
