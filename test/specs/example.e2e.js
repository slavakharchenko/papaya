const { writeCSV }  = require('../helpers/csv');
const MainPage = require('../pageobjects/main.page');
const SearchPage = require('../pageobjects/search.page');

describe('Ebay', () => {
    it('Parse apple products', async () => {
        await MainPage.open();

        await MainPage.moveToHoverElement('Electronics');
        await MainPage.chooseCategory();

        const pages = 4;
        let result = [];
        for (let i = 1; i <= pages; i += 1) {
            console.log(i);
            await SearchPage.choosePage(i);
            const listOfData = await SearchPage.storeInfoAllItems();
            result = result.concat(listOfData);
        }

        await writeCSV(result);
    });
});


