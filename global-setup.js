const{chromium} = require('playwright/test')

module.exports=async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com/login');
    await page.fill('#username', 'user1');
    await page.fill('#password', 'password1');
    await page.click('#login');
    await page.context().storageState({ path: 'storageState.json' }); // Save the login session state
    await browser.close();
}
