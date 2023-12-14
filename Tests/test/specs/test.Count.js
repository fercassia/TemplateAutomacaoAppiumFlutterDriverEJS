const assert = require('assert');
const countPage = require('../pageobjects/count.page');

describe('Tests count page', () => {
    const txt = countPage.txtHowManyTimes;

    beforeEach (async () => {
        const initialValue = '0';

        await countPage.toRestore();
        await countPage.setValue(initialValue);
    }),
    
    it('should see the text in count page', async()=>{
        assert.strictEqual(await driver.getElementText(txt),
            'You have pushed the button this many times:')
    }),

    it('should 0 as initial value', async()=>{
        assert.strictEqual(await driver.getElementText(countPage.value),'0')
    }),

    it('Error to allure report wrong txtValue - Received 2, instead of 0', async()=>{
        assert.strictEqual(await driver.getElementText(countPage.value),'2')
    }),
    it('Error to allure report wrong Text - Received Youuuu, instead of You', async()=>{
        assert.strictEqual(await driver.getElementText(txt),
            'Youuuu have pushed the button this many times:')
    }),
    it('Error to allure report wrong count - Received 5, instead of 2', async()=>{
        //Arrange 
        const incrementTimes = 2;
        await countPage.setValue(incrementTimes);

        //Action
        await countPage.toIncrement(incrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.value);
        assert.strictEqual(getNewValue,'5');
    }),

    it('should increment until value become 2', async()=>{
        //Arrange 
        const incrementTimes = 2;
        await countPage.setValue(incrementTimes);

        //Action
        await countPage.toIncrement(incrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.value);
        assert.strictEqual(getNewValue,'2');
    }),

    it('should decrement until value become 4', async()=>{
        //Arrange
        const incrementTimes = 10;
        const decrementTimes = 6;
        const result = 4;

        await countPage.setValue(result);

        //Action
        await countPage.toIncrement(incrementTimes);
        await countPage.toDecrement(decrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.value);
        assert.strictEqual(getNewValue,'4');
    }),

    it('should restore to 0', async()=>{
        //Arrange
        const incrementTimes = 15;
        const result = 0;

        await countPage.setValue(result);

        //Action
        await countPage.toIncrement(incrementTimes);
        await countPage.toRestore();

        //Assert
        const getNewValue = await driver.getElementText(countPage.value);
        assert.strictEqual(getNewValue,'0');
    }),

    it('should stay 0 when try to decrement more times than value incremented', async()=>{
        //Arrange
        const incrementTimes = 4;
        const decrementTimes = 6;
        const result = 0;

        await countPage.setValue(result);

        //Action
        await countPage.toIncrement(incrementTimes);
        await countPage.toDecrement(decrementTimes);

        //Assert
        const getNewValue = await driver.getElementText(countPage.value);
        assert.strictEqual(getNewValue,'0');
    })
})


