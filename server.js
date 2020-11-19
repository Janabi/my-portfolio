'use strict';

// declare a variable to use an express library.
const express = require('express');

// declare a variable that has all the properties and methods in express libraries.
const server = express();

// declare a variable that store a hostlocal number.
const PORT = 4000;

server.get('/data', (request, response) => {
    response.send('Hello There!');
});