/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import checkHealth from '../app';

test('appCheck 0', () => {
  expect(checkHealth({ name: 'Маг', health: 90 })).toBe('Green');
});
test('appCheck 1', () => {
  expect(checkHealth({ name: 'Маг', health: 50 })).toBe('Yellow');
});
test('appCheck 2', () => {
  expect(checkHealth({ name: 'Маг', health: 35 })).toBe('Yellow');
});
test('appCheck 3', () => {
  expect(checkHealth({ name: 'Маг', health: 15 })).toBe('Yellow');
});
test('appCheck 4', () => {
  expect(checkHealth({ name: 'Маг', health: 5 })).toBe('Red');
});
test('appCheck 5', () => {
  expect(checkHealth({ name: 'Маг', health: -10 })).toBe(0);
});
