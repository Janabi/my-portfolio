'use strict';

const { request, response } = require('express');
// declare a variable to use an express library.
const express = require('express');

// declare a variable that has all the properties and methods in express libraries.
const server = express();

// declare a variable that store a hostlocal number.
const PORT = process.env.PORT || 4000;

server.use(express.static('./public'));

server.get('/data', (request, response) => {
    response.send('Hello There!');
});

server.get('/jobs', (request, response) => {
    let jobs = [
        {title : 'Full-stack developer'},
        {title: 'Process Engineer'},
        {title: 'Software Engineer'},
        {title: 'Author'},
        {title: 'Translator'}
    ];
    response.send(jobs);
});

server.listen(PORT, ()=>{
    console.log('listening');
});