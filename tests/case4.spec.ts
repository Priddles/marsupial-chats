import { test, expect, Page, Locator } from '@playwright/test';

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
class BridgesPage{
    // This is for the about section.
    // Below would be selectors/xpaths
    main: string;
    description: string;
    view: string;
    rssFeed: Locator;
    totalBridges: number;
    async clickView(): Promise<void>{};
    async clickGetRssFeed(): Promise<void>{};
    // All the other details for 
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

test.beforeAll(async({page}) => {
    await page.goto("http://localhost:3000");
    await sleep(500); // So it renders the imgs/buttons properly
});

test('Check about page', async ({ page }) => {
    const bridges = new BridgesPage();
    // Tests would be created below using the page object.
});


