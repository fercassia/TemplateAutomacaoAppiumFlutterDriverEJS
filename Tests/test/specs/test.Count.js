const find = require('appium-flutter-finder')
const assert = require('assert');
const countPage = require('../pageobjects/count.page');
const { count } = require('console');

describe('Tests count page', () => {
    beforeEach (async () => {
        const initialValue = '0';

        await countPage.toRestore();
        await countPage.setTextValue(initialValue);
    }),
    
    it('should see the text in count page', async()=>{
        const txt = countPage.txtHowManyTimes;
        await assert.strictEqual(await driver.getElementText(txt),
            'You have pushed the button this many times:')
    }),

    it('should 0 as initial value', async()=>{
        const txtValue = countPage.txtValue;
        await assert.strictEqual(await driver.getElementText(txtValue),'0')
    }),

    it('Error to allure report wrong txtValue', async()=>{
        const txtValue = countPage.txtValue;
        await assert.strictEqual(await driver.getElementText(txtValue),'2')
    }),
    it('Error to allure report wrong Text', async()=>{
        const txt = countPage.txtHowManyTimes;
        await assert.strictEqual(await driver.getElementText(txt),
            'Youuuu have pushed the button this many times:')
    }),
    it('Error to allure report wrong count', async()=>{
        //Arrange 
        const incrementTimes = 2;
        await countPage.setTextValue(incrementTimes);

        //Action
        await countPage.toIncrement(incrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.txtValue);
        await assert.strictEqual(getNewValue,'5');
    }),

    it('should increment until value become 2', async()=>{
        //Arrange 
        const incrementTimes = 2;
        await countPage.setTextValue(incrementTimes);

        //Action
        await countPage.toIncrement(incrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.txtValue);
        await assert.strictEqual(getNewValue,'2');
    }),

    it('should decrement until value become 4', async()=>{
        //Arrange
        const incrementTimes = 10;
        const decrementTimes = 6;
        const result = 4;

        await countPage.setTextValue(result);

        //Action
        await countPage.toIncrement(incrementTimes);
        await countPage.toDecrement(decrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.txtValue);
        await assert.strictEqual(getNewValue,'4');
    }),

    it('should restore to 0', async()=>{
        //Arrange
        const incrementTimes = 15;
        const result = 0;

        await countPage.setTextValue(result);

        //Action
        await countPage.toIncrement(incrementTimes);
        await countPage.toRestore();

        //Assert
        const getNewValue = await driver.getElementText(countPage.txtValue);
        await assert.strictEqual(getNewValue,'0');
    }),

    it('should stay 0 when try to decrement more times than value incremented', async()=>{
        //Arrange
        const incrementTimes = 4;
        const decrementTimes = 6;
        const result = 0;

        await countPage.setTextValue(result);

        //Action
        await countPage.toIncrement(incrementTimes);
        await countPage.toDecrement(decrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.txtValue);
        await assert.strictEqual(getNewValue,'0');
    })
})


