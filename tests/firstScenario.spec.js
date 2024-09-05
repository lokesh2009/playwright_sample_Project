// Include playwrite module
const {test,expect}= require('@playwright/test')

// Write a testawait page.goto('https://www.google.com/');

test.describe.configure({mode:'serial'});

test('Verify google search',async({page}) =>{
    // go to the URl

    await page.goto("https://google.com");

    // Seach icon
    await page.getByLabel('Search', { exact: true });
    await page.getByLabel('Search', { exact: true }).fill('Y dil mange more');
    await page.getByRole('button', { name: 'Google Search' }).click();

// Go to url
// Search with keywork
//

})