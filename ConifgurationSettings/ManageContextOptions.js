// Managing browser context

//What is spread operator and What other things we can set using spread operator?

const {chromium} = require('playwright')

const baseontextoption={
    viewport:{width:1200},
    userAgent:'MyAgent',
};

(async ()=>{
    const browser = await chromium.launch();
    // 
    const context = await browser.newContext({
        ...baseontextoption,
        geolocation:{longitude:12},
        permissions:['geolocation'],
    })
});

const page = await page.context.newPage();
await page.goto("https://example.com");
await browser.close();

// Managing Page options

const baseNavigationOption={
    timeout: 60000, 
  waitUntil: 'domcontentloaded',
}

(async ()=>{
await page.goto("https://example.com"),{
...baseNavigationOption,
timeout:30000,
}
});

// Combining launch option

const baseLaunchOption={
    headless:false,
    args:['--no-sandbox'],
}

(async()=>{
    const browser = await chromium.launch({
        ...baseLaunchOption,
        slowMo:100,
    });
})

const page1 = await page1.context.newPage();
await page1.goto("https://example.com");
await browser.close();

// Combining route handle
await page.route('https://example.com/api', (route, request) => {
    const baseResponse = {
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    };
  
    route.fulfill({
      ...baseResponse,
      body: JSON.stringify({ success: true, additionalData: 'info' }), // Extending the body response
    });
  });

  // managing test oiptions

  // Base config
  const config = {
    use: {
      baseURL: 'https://example.com',
      headless: true,
      viewport: { width: 1920, height: 1080 },
    },
  };
  
  // Extend config with mobile options
  const mobileConfig = {
    ...config,
    use: {
      ...config.use,
      ...devices['iPhone 12'],  // Adding mobile device config
    },
  };
  
  module.exports = mobileConfig;
  
// Managing Http request

const defaultRequestOptions = {
    headers: {
      'Accept': 'application/json',
    },
    method: 'POST',
  };
  
  const response = await page.request.post('https://example.com/api', {
    ...defaultRequestOptions,
    data: { key: 'value' },  // Adding POST data
  });
  
