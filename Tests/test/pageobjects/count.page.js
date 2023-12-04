const { $ } = require('@wdio/globals')
const find = require('appium-flutter-finder')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CountPage {

    constructor(){
        this.element = '0';
    }

    set numberCount(element) {
        this.element = element
    }
    
    get textCountPage () {
        return $(find.byText('You have pushed the button this many times:'));
    }

    get numberCount () {
        return $(find.byText(`${numerCount}`));
    }

    get btnIncrement () {
        return $(find.byTooltip('Increment'));
    }

    get btnDecrement () {
        return $(find.byTooltip('Decrement'));
    }

    get btnRestore () {
        return $(find.byTooltip('Restore'));
    }
    
    incrementTimes = (numberToInterect) => {
        for(increment = 0; increment < numberToInterect; increment++){
            driver.elementClick(btnIncrement);
        }
    }

    decrementTimes = (numberToInterect) => {
        for(decrement = numberToInterect; decrement <= 0; decrement--){
            driver.elementClick(this.btnDecrement);
        }
    }

}

module.exports = new CountPage();
