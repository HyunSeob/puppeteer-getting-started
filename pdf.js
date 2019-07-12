const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800
  });

  await page.goto(
    "https://hyunseob.github.io/2019/05/09/google-io-2019-day-1/"
  );
  await page.pdf({
    path: "Google IO 2019 Day 1 후기.pdf",
    format: "A4"
  });

  await browser.close();
})();
