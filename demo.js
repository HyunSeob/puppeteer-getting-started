const puppeteer = require("puppeteer");
const myAccount = require("./google-account.js");

const loginButtonSelector = "#gb_70";
const emailInputSelector = "#identifierId";
const nextButtonSelector1 = "#identifierNext";
const passwordInputSelector = 'input[type="password"]';
const nextButtonSelector2 = "#passwordNext";
const profileButtonSelector = 'a[title^="Google 계정"]';

jest.setTimeout(30000);

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://google.com");

  // 로그인 버튼 클릭
  // 페이지 전환을 기다리기

  // 이메일 타이핑
  // 다음 버튼 클릭
  // 페이지 전환 기다리기

  // 패스워드 Input이 보일 때까지 기다리기
  // 패스워드 타이핑
  // 확인 버튼 클릭
  // 페이지 전환 기다리기

  // 프로필 버튼 기다리기
  // 버튼 title 얻기
  // 버튼 타이틀에 email이 들어있는지 체크

  // 브라우저 종료
})();
