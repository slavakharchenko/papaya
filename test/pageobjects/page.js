module.exports = class Page {
    open (path='') {
        return browser.url(`https://www.ebay.com/${path}`)
    }
}
