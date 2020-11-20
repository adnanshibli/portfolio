'use strict';

const { response } = require('express');
// make a variable called express to use the library to build the server
const express = require('express');
// server has all proparties and method of express library
const server = express();
 const PORT = process.env.PORT || 3500;

 server.use(express.static('./public'))

 server.get('/data',(request,response)=>{
     response.send('hello');

 })
 server.get('/people',(request,response)=>{
    let family =[
        {name:'razan'},
        {name:'adnan'},
        {name:'amal'}
    ];
    response.send(family);

})

 server.listen(PORT,()=>{
     console.log('hello');
 })