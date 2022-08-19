const puppeteer = require('puppeteer');

(async() =>{
  
   let url='https://www.doviz.com/';
   
   let browser = await puppeteer.launch(  {
      "headless": true,
      "slowMo": 5
  });

   let page = await browser.newPage();

   await page.goto(url, {waitUntil: 'networkidle2' });

   let data = await page.evaluate(()=>{ 
    let altın= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(1) > a > span.value").innerText
    let dolar= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(2) > a > span.value").innerText
    let euro= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(3) > a > span.value").innerText
    let sterlin= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(4) > a > span.value").innerText
    let BIST100= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(5) > a > span.value").innerText
    let bitcoin= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(6) > a > span.value").innerText
    let gümüş= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(7) > a > span.value").innerText
    let faiz= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child(8) > a > span.value").innerText

      return{
         altın,
         dolar,
         euro,
         sterlin,
         BIST100,
         bitcoin,
         gümüş,
         faiz      
      }      
   });
  console.log(data);
  await browser.close();

})();