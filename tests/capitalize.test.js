// eslint-disable-next-line import/extensions
import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello');

assert.equal(capitalize(''), '');

// eslint-disable-next-line no-console
console.log('Все тесты пройдены!');
