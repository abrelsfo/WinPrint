#!/usr/bin/env node
'use strict';
var meow = require('meow');
const updateNotifier = require('update-notifier');
var winprint = require('./');

var cli = meow([
  '$ winprint --help',
  '',
  '  Usage',
  '    winprint [input] [flags]',
  '',
  '  Flags',
  '    -l --> print literal',
  '',
  '  Examples',
  '    $ winprint giggles.txt',
  '    shits & giggles',
  '',
  '    $ winprint ponies.txt -l',
  '    cows & rainbows\\n'
]);

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length !== 1 || Object.keys(cli.flags).length > 1) {
  console.error('WinPrint expected one file and an optional flag, got more or less');
  console.log(cli.help);
  process.exit(1);
}

winprint(cli.input[0], Object.keys(cli.flags)[0] || '', function (res) {
  console.log(res);
});
