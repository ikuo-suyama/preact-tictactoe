## typescriptで名前付き引数(Destructuring)

https://typescript-jp.gitbook.io/deep-dive/future-javascript/destructuring

## jest + ts + puppeteer
https://github.com/kulshekhar/ts-jest
https://jestjs.io/docs/ja/puppeteer
https://medium.com/better-programming/how-to-use-puppeteer-with-jest-typescript-530a139ffe40
https://github.com/facebook/jest/issues/6933

```sh
$ yarn add --dev jest ts-jest puppeteer jest-puppeteer @types/jest @types/puppeteer
$ yarn ts-jest config:init
```

jest.config.js に `preset: 'jest-puppeteer'` を追加
package.json に `test:'jest'` scriptを追加 
