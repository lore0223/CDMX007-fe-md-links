#!/usr/bin/env node

const reader = require('./read.js');
// reader();

const pathFile = process.argv[2];
const validateTrue = process.argv[3]

reader.readFile(pathFile, validateTrue);