const express = require('express');
const path = require('path');

const app = express();

const data = require('./students.json');



app.listen(3007, ()=>{
    console.log("listening local host 3007");
})

// routing
// request: get, post, put, delete

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.status(200).send('hello world')
  })

  app.get('/about', function (req, res) {
    res.send('hello world - <h1>explanation</h1>')
  })


//! postman  ...   download from internet


//!  this will not work, because absolut path is noetig
// app.get("/", (req, res) => {
//     res.sendFile("./views/")
// })

//?   solutions in Annass file  and further posts as well

console.log(__dirname);


//!  API    json
app.get("/students/api")


