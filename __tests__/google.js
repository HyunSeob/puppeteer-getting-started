const puppeteer = require("puppeteer");
const myAccount = require("../google-account.js");

jest.setTimeout(30000);

describe("google.com", () => {
  let browser = null;
  let signContext = null;
  let page = null;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    signContext = await browser.createIncognitoBrowserContext();
  });

  afterAll(() => {
    browser.close();
  });

  beforeEach(async () => {
    page = await signContext.newPage();

    await page.setViewport({
      width: 1200,
      height: 800
    });

    // Google 접속
    await page.goto("https://google.com");
  });

  afterEach(async () => {
    await page.close();
  });

  test("로그인", async () => {
    // 로그인 페이지로 이동
    await page.click("#gb_70");
    await page.waitForNavigation();

    // 이메일 타이핑 및 다음
    await page.type("#identifierId", myAccount.email);
    await page.click("#identifierNext");
    await page.waitForNavigation();

    // 패스워드 타이핑 및 다음
    await page.waitForSelector('input[type="password"]', {
      visible: true
    });
    await page.type('input[type="password"]', myAccount.password);
    await page.click("#passwordNext");
    await page.waitForNavigation();

    await page.waitForSelector('a[title^="Google 계정"]', {
      visible: true
    });

    // 로그인 체크
    const buttonTitle = await page.$eval(
      'a[title^="Google 계정"]',
      button => button.title
    );

    expect(buttonTitle).toContain("sytte1017@gmail.com");
  });

  test("로그아웃", async () => {
    const nextPage = await page.$eval(
      'a[title^="Google 계정"]',
      button => button.href
    );

    await page.goto(nextPage);
    await page.click("#signout");
    await page.waitForNavigation();

    const buttonText = await page.$eval("#gb_70", button => button.textContent);

    expect(buttonText).toBe("로그인");
  });
});
