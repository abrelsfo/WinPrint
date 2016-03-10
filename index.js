'use strict';
var fs = require('fs');
var i;
var s;

function openFile(file, literal){
  fs.stat(file, function(err) {
    if (err == null) {
      fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
          throw (err);
        }
        if (literal) {
          printLit(data);
        } else {
          printNonLit(data);
        }
      });
    } else if(err.code == 'ENOENT') {
      throw new Error('Could not find file: ' + file)
    } else {
      console.log('Some other error: ', err.code);
    }
  });
}

function printLit(data) {
  for (i = 0; i < data.length; i++) {
    s = JSON.stringify(data[i])
    process.stdout.write(s.slice(1,-1));
    if (data[i] === '\n') {
      console.log('');
    }
  }
}

function printNonLit(data) {
  for (i = 0; i < data.length; i++) {
    process.stdout.write(data[i]);
  }
}

module.exports = function (input, literal) {
  if (input === undefined) {
    throw new Error('WinPrint expected a file but got nothing');
  }

  if (literal !== 'l' && literal !== undefined) {
    throw new Error('WinPrint expected flag to be missing or l, got ' + literal);
  }

  console.log('')
  openFile(input, literal);
};
