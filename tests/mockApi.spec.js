const { test, expect } = require('@playwright/test');


test.describe('Sample Test practice', () =>{
  test('test mocking api', async({page}) =>{
    debugger
    await page .route('*/**/api/v1/fruits', async (route) =>{
      debugger
      const json =[{name: 'Strawberry', id:21}];
      debugger
      await route.fulfill({json})
  });
      // Go to the page
      await page.goto('https://demo.playwright.dev/api-mocking');
  
      // Assert that the Strawberry fruit is visible
      await expect(page.getByText('Strawberry')).toBeVisible();
    });
  
  });

  

test.describe('Mocking an API call', () => {

  test('mocks a fruit and does not call api', async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async (route) => {
      const json = [{ name: 'Watermelon', id: 30 }];
      await route.fulfill({ json });
    });
    
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Watermelon')).toBeVisible();
  });
  
});

test('gets the json from api and adds a new fruit', async ({ page }) => {
  // Get the response and add to it
  await page.route('*/**/api/v1/fruits', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'Loquat', id: 100 });
    // Fulfill using the original response, while patching the response body
    // with the given JSON object.
    await route.fulfill({ response, json });
  });

  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the new fruit is visible
  await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
});

// Modify API responses
