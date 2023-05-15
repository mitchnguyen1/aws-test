const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("press draw displays choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.id("choices"))
  });
  test("press add to duo displays player-duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.className("bot-btn")).click()
    await driver.findElement(By.id("player-duo"))
  });
  // test("press removed from duo shows that element return to choices", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 1000);
  //   await driver.findElement(By.id("draw")).click()
  //   const robotToRemove = await driver.findElement(By.className("bot-btn"))
  //   robotToRemove.click()
  //   robotToRemove
  //   // await driver.findElement(By.id("player-duo"))
  // });
});