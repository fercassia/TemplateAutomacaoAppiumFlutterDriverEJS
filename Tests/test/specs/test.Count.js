const find = require('appium-flutter-finder')
const assert = require('assert')

    //TODO: Refatorar os testes e criar page object
    //TODO: Adicionar uma solução que mate o node toda hora que rodar os testes
    //TODO: adicionar um report do allure

describe('Tests count page', () => {
    it('should see the text in count page', async()=>{
        const txt = find.byText('You have pushed the button this many times:');
        assert.strictEqual(await driver.getElementText(txt),
            'You have pushed the button this many times:')
    }),
    it('should 0 as initial value', async()=>{
        const initialValue = find.byText('0');
        assert.strictEqual(await driver.getElementText(initialValue),'0')
    })
    it('should increment until value become 2', async()=>{
        const initialNumber = '0';
        const finalNumber = '2';
        
        const initialValue = find.byText(initialNumber);
        const finalValue = find.byText(finalNumber);

        const btnIncrement = find.byTooltip('Increment');

        await driver.getElementText(initialValue);
        await driver.elementClick(btnIncrement);
        await driver.elementClick(btnIncrement);

        assert.strictEqual(await driver.getElementText(finalValue),'2')
    })
})

