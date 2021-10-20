import 'expect-puppeteer';

describe('visit google.com', () => {
    beforeAll(async () => {
        await page.goto('https://baidu.com');
    });

    test('should be titled "Google"', async () => {
        await expect(page.title()).resolves.toMatch('百度一下，你就知道');
    }, 1 * 1000);

    test('generate pdf', async ()=> {
        await page.pdf({path: 'example.pdf'});
    });

});
