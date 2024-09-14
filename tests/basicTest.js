import {test,expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.only("Basic",async({page})=>{
    await page.goto("htttps://commitquality.com/practice-api");
    await page.locator(".back-link").waitFor();

    // Checks whole page
    const axeBuilder = await new AxeBuilder({page}).include['.back-link']
    analyze();
    expect(axeBuilder.violations).toEqual[];
})