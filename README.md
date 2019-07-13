# Puppeteer: Getting Started

I/O Extended 2019 WebTech 행사에서 사용한 코드 모음입니다.
직접 테스트해보시기 위해서 Node.js와 yarn이 필요합니다.

## 직접 테스트하기

### 의존성 설치하기

```sh
$ yarn # install
```

### 스크린샷

```sh
$ node screenshot
```

### PDF

```sh
$ node pdf
```

### e2e 테스트

다음과 같이 google-account.js를 작성합니다.

```js
module.exports = {
  email: "your@google.email",
  password: "your-google-password"
};
```

그리고 명령어를 실행합니다.

```sh
$ yarn test
```

### 크롤링

```sh
$ node crawling
```
