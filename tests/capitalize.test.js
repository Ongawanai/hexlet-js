// eslint-disable-next-line import/extensions
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

// eslint-disable-next-line no-console
console.log('Все тесты пройдены!');
