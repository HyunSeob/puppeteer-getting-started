const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800
  });

  await page.goto("https://google.com");
  await page.screenshot({ path: "google.jpg" });

  await browser.close();
})();
