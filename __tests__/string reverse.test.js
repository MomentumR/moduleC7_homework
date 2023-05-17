const stringReverse = require('../func/string reverse');


describe('Тестируем функцию, переворачивающую строку', () => {

    let testString1 = 'qwerty';
    it(`test func stringReverse on input = ${testString1}`, () => {
        expect(stringReverse(testString1)).toBe('ytrewq');
    });

    let testString2 = 'morty';
    it(`test func stringReverse on input = ${testString2}`, () => {
        expect(stringReverse(testString2)).toBe('ytrom');
    });
})