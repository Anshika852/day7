// const fs = require('fs');

// const data = fs.readFileSync('./myReadMe.txt', {encoding:'utf8'}); // buffer ko string m convert krke dyega 
// // const data = fs.readFileSync('./myReadMe.txt');    buffer ki form dyega output 
// console.log(data);

// console.log(data.toString());  //to convert into string 


// const fs = require('fs');
// fs.writeFileSync('./logs.txt' , "10th April 2024:day7"); will automaticaaly make the file 



// const fs = require('fs');
// console.log('start');

// fs.writeFileSync('./logs.txt' , "10th April 2024:day7");
// console.log(data);


//promises in file system //
// const fsPromises = require('fs/promises');
// console.log("start");
//  const pr = fsPromises.readFile('./myReadMe.txt', {encoding:'utf8'});
//  console.log(pr);
//  pr.then((res)=>{
//     console.log(res);
//  })
//  console.log("end");




//callback in filesystem
// const fs = require('fs');
//  fs.readFileSync('./myReadMe.txt', {encoding:'utf8'} , (err,data)=>{
// console.log(data);
// });

// http://localhost:1400/  localhost runner path 


// url wla part server kaise bnega 
// const http = require('http');
// const app = http.createServer((req, res)=>{
//    console.log('request recieved')
//    console.log(req.url);
//    res.writeHead(200,{
//       'content-type': 'text/html',
//    })


//    res.end("Anshika Aggarwal");
// });
// app.listen(1400);

// min project
const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./data.json', 'utf8');
const dataObj = JSON.parse(data);     //string to onjectjson
const products = dataObj.products;
// console.log(dataObj);


const htmlTemplate = `
<DOCTYPE HTML>
<html lang ='en'>
  <head>
     <style>
    .product-card{
      max-width:500px;
      margin:20px auto;
      border:3px solid red;
      padding:16px;
      border-radius:13px;
      background-color:brown;
      hover:blue;
    }

     </style>
  </head>
  <body>
  __PRODUCTS__CARDS__
   </body>
  </html> 
`

const cardTemplate = `
  <div class='product-card'>
  <h4>__TITLE__</h4>
  <p>__INFO__</p>
  </div>
`

const allCards = products.map((elem)=>{
   let newCard = cardTemplate;
   newCard = newCard.replace('__TITLE__',elem.title);
   newCard = newCard.replace('__INFO__',elem.description);
   return newCard;
});
const allCardsString = allCards.join(' ');

// const card1 = cardTemplate
//         .replace('__TITLE__',products[0].title)
//         .replace('__INFO__',products[0].description);

// const card2 = cardTemplate
//         .replace('__TITLE__',products[1].title)
//         .replace('__INFO__',products[1].description); 

// const card3 = cardTemplate
//         .replace('__TITLE__',products[2].title)
//         .replace('__INFO__',products[2].description);       
        
//   const allCards = card1+card2;
//   console.log(allCards);      

const page = htmlTemplate.replace('__PRODUCTS__CARDS__', allCardsString);
const app = http.createServer((req, res)=>{
   console.log('request recieved')
   console.log(req.url);
   res.writeHead(200,{'content-type': 'text/html',})
  res.end(page);
});
app.listen(1400);

