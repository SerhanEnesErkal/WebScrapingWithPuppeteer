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
      genel=[]
      for(value=1;value<=8;value++){
          let a= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child("+value+")> a > span.value").innerText
          if (value=1)  { genel.push("altinin degeri:"+a)}
          
         else{continue;}


             }
      return{genel
      
      }
   });
  console.log(data);
  await browser.close();

})();