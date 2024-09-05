
const { Given } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');

// Define the step definition
Given('let open the url {string}', async function(url) {
  // Navigate to the provided URL using Playwright
      await test.page.goto(url);
});


Given(`tab on seacrTextBox`, () => {
    
});

Then(`provide a {string} for search`, (arg0: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`click on search icon`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`validate the product is visble or not`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});