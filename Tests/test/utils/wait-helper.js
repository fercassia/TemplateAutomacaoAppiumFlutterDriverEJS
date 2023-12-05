const { $ } = require("webdriverio");

class WaitHelper {
    waitUntilElemetExist = function (element, timeout = 3000) {
        element.waitForExist({timeout});
    }

    waitAndClick = async function (element) {
        await waitUntilElemetExist(element);
        await element.click();
    }
}
module.exports = new WaitHelper();
