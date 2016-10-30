'use strict';

// If we wanna run on Heroku, this is the port setup
const PORT = process.env.PORT || 3000;

const fs = require('fs');
const path = require("path");

const express = require('express');
const socketIO = require('socket.io');

const INDEX = path.join(__dirname, 'index.html');

const router = express.Router();

// TODO: Rewrite the following to serve views correctly
const server = express()
	.use('/', (req, res) => {
		res.sendFile(INDEX);
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));
	
const io = socketIO(server);


// I took index.js out of the package.json so that it would play nicely with angular's transpiler and browser watch...