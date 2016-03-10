'use strict';
var fs = require('fs');
var rVal = '';
var i;
var s;

function openFile(file, literal, callback) {
  fs.stat(file, function (err) {
    if (err === null) {
      read(file, literal, callback);
    } else if (err.code === 'ENOENT') {
      throw new Error('Could not find file: ' + file);
    } else {
      console.log('Some other error: ', err.code);
    }
  });
}

function read(file, literal, callback) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      throw (err);
    }
    if (literal) {
      printLit(data, callback);
    } else {
      printNonLit(data, callback);
    }
  });
}

function printLit(data, callback) {
  for (i = 0; i < data.length; i++) {
    s = JSON.stringify(data[i]).slice(1, -1);
    rVal += s;
    if (data[i] === '\n') {
      rVal += '\n';
    }
  }
  callback(rVal);
}

function printNonLit(data, callback) {
  callback(data);
}

module.exports = function (input, literal, callback) {
  if (input === undefined) {
    throw new Error('WinPrint expected a file but got nothing');
  }

  if (literal !== 'l' && literal !== '') {
    throw new Error('WinPrint expected flag to be missing or l, got ' + literal);
  }

  console.log('');
  openFile(input, literal, callback);
};
