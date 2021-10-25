const { By, Builder } = require("selenium-webdriver");
const assert = require("assert");

let driver;

describe("Test HelloWorld", () => {
  // before: テスト前に実行される
  before(() => {
    driver = new Builder().forBrowser("chrome").build();
  });

  // after: テスト後に実行される
  after(() => {
    return driver.quit();
  });

  it("yukiendo.jpのページタイトルが正しいか", async () => {
    await driver.get("https://yukiendo.jp/");
    const title = await driver.getTitle();

    assert.equal(title, "遠藤勇気のポートフォリオサイト");
  });
});
