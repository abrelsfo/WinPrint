# WinPrint

[![npm version](https://img.shields.io/npm/v/winprint.svg)](https://www.npmjs.com/package/winprint)
[![Build Status](https://travis-ci.org/abrelsfo/WinPrint.svg?branch=master)](https://travis-ci.org/abrelsfo/WinPrint.svg?branch=master)
[![npm download count](http://img.shields.io/npm/dm/winprint.svg?style=flat)](http://npmjs.org/winprint)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> This is a replacement for the PRINT function on Windows since PRINT no longer works

<br>

## Install

```
$ npm install --save winprint
```


## Usage

```js
const winprint = require('winprint');

winprint('giggles.txt', '', function (res) {
  console.log(res);
});
//=> shits & giggles
//=> when beig used as a function you need to specify the flag as '' or 'l'

winprint('ponies.txt', 'l', function (res) {
  console.log(res);
})
//=> cows & ponies\n
```

<br>

## API

### winprint(target, flag, callback)

This will replace the PRINT function on Windows since PRINT no longer works

##### target

Type: `string`

##### flag (optional on the command line)

Type: `string`<br>
Default: Not literal

<br>

## CLI

```
$ npm install --global winprint
```

```
$ winprint --help

  Usage
    winprint [input] [flags]

  Flags
    -l --> print literal

  Examples
    $ winprint giggles.txt
    shits & giggles

    $ winprint ponies.txt -l
    cows & rainbows\n
```


## License

MIT © [Alex Brelsford](abrelsfo.github.io)
