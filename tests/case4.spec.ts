import { Locator, Page, expect, test } from "@playwright/test";

/** Task:
 * A new webpage is being developed for a bridge company and you have been asked to make sure it works correctly. You've decided to use playwright
 * and the basic design has been given. The functionality isn't fully built yet but it will be a static page. New bridges will be added over the
 * next few months that match the existing format so factor that in when you set up your design.
 *
 * Your task to is write a basic design for the page using Page object model. Only the interface or types need to be defined, no code needs to
 * execute tests on the page. See the example below.
 *
 * How to run the server:
 * node data/case4/index.js
 */
/** This is the main Bridges page. Setup how you would design this page. It can be done here or you can create a new file and import in the class
 * It's encouraged that you write your own design for the About section.
 */
class BridgesPage {
  // This is for the about section.
  // Dunno what the expected pattern is so I just went with what I first thought of.

  main: Locator; // I dunno what this is for.
  description: Locator;
  view: Locator;
  rssFeed: Locator;
  totalBridges: Locator;
  clickView: () => Promise<void>;
  clickGetRssFeed: () => Promise<void>;

  constructor(page: Page) {
    const aboutCard = page.getByTestId("about");

    this.main = aboutCard;
    this.description = aboutCard.getByTestId("about-description");
    this.view = aboutCard.getByRole("button", { name: "View" });
    this.rssFeed = aboutCard.getByRole("button", { name: "Get RSS feed" });
    this.totalBridges = aboutCard
      .getByRole("paragraph")
      .filter({ hasText: /^Total bridges/ });

    this.clickView = () => this.view.click();
    this.clickGetRssFeed = () => this.rssFeed.click();
  }
}

/**
 * Create designs for:
 *  - Popular posts
 *  - Tags
 *  - Suspension bridge
 *  - Beam bridge
 */

function sleep(milliseconds: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
}

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
  await sleep(500); // So it renders the imgs/buttons properly
});

test("Check about page", async ({ page }) => {
  const bridges = new BridgesPage(page);

  await expect(bridges.main).toBeVisible();
  await expect(bridges.description).toHaveText(
    "This page is all about bridges. They are tall. They are long. They are old. They can be made of different things."
  );
  await expect(bridges.view).toBeEnabled();
  await expect(bridges.rssFeed).toBeEnabled();
  await expect(bridges.totalBridges).toBeVisible();
  await expect(bridges.totalBridges).toHaveText(/\b10\b/);
});
