const{chromium} = require('playwright/test')

const context = await browser.newContext();

test.afterEach(()=>{
    console.log("Hello after each test")
});

test.afterAll(()=>{
    console.log("Hello After all")
});


