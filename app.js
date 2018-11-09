// const express = require('express');
//'express' by default this path takes user to node modules.
// ^this line means: go look in node_module folder and find another folder named express, in that folder there will be a file that processes multiple things then exporting a magic variable for you and you are equalling epxress to that variable. 

// in js


// in express, relative paths change. 

// const app = express();
// this line creates a variable named app that's equal to what happens when we execute the file that we got from requiring express on line 1.


// const q = require('./blah.js');
//^ above means './' stay in the same folder.

// console.log(q);

// these 2 lines always start express projects.always


const express = require('express');
const app = express();



app.use(express.static('public'));
// middleware is app.use. static is any image file, mainly front end.




app.get('/', (req, res, next) => {
  res.send
  (`<h1>Welcome Ironhacker. :)</h1>
  <ul> <li>hello</li> </li>
  <a href 
  `);
});


app.get('/about', (req, res, next) =>{
  res.sendFile(_dirname + '/views/home-page.html');
});
// ROUTE ABOVE - never forget this syntax/combo of characters

// app.get('/', (req, res, next) => {
//   res.send('<h1>Welcome Ironhacker. :)</h1>');
// });

// '/' - refers to a website google.com, apple.com etc.
// (request, response) - technically 3 w next sometimes. mainly 2 though. usually referred to as req and res.










app.listen(3000, () => {
  console.log('my first app listening on port 3000!')
});