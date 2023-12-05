const { $ } = require("webdriverio");

class WaitHelper {
    waitUntilElemetExist = async (element, timeout = 3000) => {
       await element.waitForExist({timeout});
    }

    waitAndClick = async (element) => {
        await waitUntilElemetExist(element);
        await element.click();
    }
}
module.exports = new WaitHelper();
