const Page = require('./page');

const selectors = {
    nav: '.hl-cat-nav',
    navFlyout: '.hl-cat-nav__flyout',
    navLink: '.hl-cat-nav__js-link',
}

class MainPage extends Page {
    async moveToHoverElement(text) {
        await $(selectors.nav).$(`li*=${text}`).moveTo();
    }

    async chooseCategory(navText = 'More categories', linkText = 'Apple') {
        await $(selectors.navFlyout).waitForDisplayed();
        await $(selectors.navFlyout).$(`${selectors.navLink}*=${linkText}`).click();
    }
}

module.exports = new MainPage();
