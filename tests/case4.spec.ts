import { test, expect, Page } from '@playwright/test';

function sleep(milliseconds: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, milliseconds);
    });
  }

/** Task:
 * 
 */
/** Instructions
 * 
 * To host the server, run the following command in a new terminal
 * node data/case4/index.js
 */

/** This is the main Bridges page. Setup how you would design this page. It can be done here or you can create a new file and import in the class
 * It's encouraged that you write your own design for the About section.
 */
class BridgesPage{
    // About details
    // Below would be selectors/xpaths
    main: string;
    description: string;
    view: string;
    rssFeed: string;
    totalBridges: number;
    async clickView(): Promise<void>{};
    async clickGetRssFeed(): Promise<void>{};
    // All the other details
}

/**
 * Designs for: 
 *  - Popular posts
 *  - Tags
 *  - Suspension bridge
 *  - Beam bridge
 */


test.beforeEach(async({page}) => {
    await page.goto("http://localhost:3000");
    await sleep(500); // So it renders the imgs/buttons properly
});

test('Check about page', async ({ page }) => {
    const bridges = new BridgesPage();
    // Tests would be created below using the page object.
});


