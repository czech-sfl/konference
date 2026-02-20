import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
await page.goto('http://localhost:3000');
await page.waitForTimeout(3000);

// Find and scroll to partners
const partners = await page.locator('#partners');
await partners.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);

// Screenshot
await page.screenshot({ path: '/tmp/partners-mobile-view.png' });

await browser.close();
