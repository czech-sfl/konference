import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
await page.goto('http://localhost:3000');
await page.waitForTimeout(3000);

// Scroll to bottom to find partners section
await page.evaluate(() => {
  const partnersSection = document.getElementById('partners');
  if (partnersSection) {
    partnersSection.scrollIntoView({ behavior: 'instant', block: 'start' });
  } else {
    // Fallback: scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  }
});
await page.waitForTimeout(1000);

// Screenshot
await page.screenshot({ path: '/tmp/partners-mobile-view.png' });

await browser.close();
