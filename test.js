import test from 'ava';
import fn from './index.js';

test.cb('NonLiteral', function (t) {
  fn('test.txt', '', function (res) {
    res = res.replace(/\r\n/g, '\n');
    t.is(res, 'This is a test\nHow is it going\nSo far!!!');
    t.end();
  });
});

test.cb('Literal', function (t) {
  fn('test.txt', 'l', function (res) {
    res = res.replace(/\\r\\n/g, '\\n');
    t.is(res, 'This is a test\\nHow is it going\\nSo far!!!');
    t.end();
  });
});
