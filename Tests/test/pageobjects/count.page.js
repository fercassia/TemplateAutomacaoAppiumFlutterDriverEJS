const { $ } = require('@wdio/globals')
const find = require('appium-flutter-finder');
const { waitUntilElemetExist } = require('../utils/wait-helper');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CountPage {
    /**
     * define selectors using getter methods
     */
    constructor(){
        this.txtHowManyTimes = find.byText('You have pushed the button this many times:');
        this.txtValue;
        this.btnDecrement = find.byTooltip('Decrement');
        this.btnRestore = find.byTooltip('Restore');
        this.btnIncrement = find.byTooltip('Increment');
    }

    setTextValue = async (value) => {
       this.txtValue = await find.byText(`${value}`);
    }

    toIncrement = async (timesToClick) =>{
        let times = 0;
        waitUntilElemetExist(this.btnIncrement);
        for (times; times < timesToClick; times++){
            await driver.elementClick(this.btnIncrement);
        }
    }

    toDecrement = async (timesToClick) =>{
        let times = timesToClick;
        waitUntilElemetExist(this.btnDecrement);
        for (times; times > 0; times--){
            await driver.elementClick(this.btnDecrement);
        }
    }

    toRestore = async () =>{
        waitUntilElemetExist(this.btnRestore);
        await driver.elementClick(this.btnRestore);
    }
}

module.exports = new CountPage();