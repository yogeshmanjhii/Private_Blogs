const puppeteer =require('puppeteer');

let browser,page;
beforeEach(async()=>{
	 browser= await puppeteer.launch({
		headless:false
	}); 
    page = await browser.newPage();
	await page.goto('localhost:3000');
})

test('Adds two numbers',()=>{

	const sum=1+2;
	expect(sum).toEqual(3);
});

test('we can lauch a browser',async()=>{


	const text = await page.$eval('a.brand-logo',el=>el.innerHTML);

	expect(text).toEqual('Blogster');
}); 