# WinPrint

[![npm version](https://img.shields.io/npm/v/winprint.svg)](https://www.npmjs.com/package/winprint)
[![npm download count](http://img.shields.io/npm/dm/winprint.svg?style=flat)](http://npmjs.org/winprint)

> This is a replacement for the PRINT function on Windows since PRINT no longer works

<br>

## Install

```
$ npm install --save winprint
```


## Usage

```js
const winprint = require('winprint');

winprint('giggles.txt');
//=> shits & giggles

winprint('ponies.txt','l')
//=> cows & ponies\n
```

<br>

## API

### winprint(target[, flag])

This will replace the PRINT function on Windows since PRINT no longer works

##### target

Type: `string`

##### flag (optional)

Type: `string`
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
