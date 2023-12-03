const { browser } = require ('webdriverio');

class AwaitHelper {
    waitUntilElemetExist = (element, timeout = 10000) => { 
        element.waitForExist(timeout);
      }
    
      waitAndClick = async (element) => {
        await waitUntilElemetExist(element);
        await element.click();
      }
}

module.exports = new AwaitHelper();