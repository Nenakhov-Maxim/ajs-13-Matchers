/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import alphabetically from '../app';

test('appCheck 0', () => {
  expect(alphabetically(alphabetically([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]))).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('appCheck 1', () => {
  expect(alphabetically(alphabetically([
    { name: 'мечник', health: 60 },
    { name: 'маг', health: 90 },
    { name: 'лучник', health: 40 },
  ]))).toEqual([
    { name: 'маг', health: 90 },
    { name: 'мечник', health: 60 },
    { name: 'лучник', health: 40 },
  ]);
});

test('appCheck 2', () => {
  expect(alphabetically(alphabetically([
    { name: 'мечник', health: 75 },
    { name: 'маг', health: 20 },
    { name: 'лучник', health: 10 },
  ]))).toEqual([
    { name: 'мечник', health: 75 },
    { name: 'маг', health: 20 },
    { name: 'лучник', health: 10 },
  ]);
});

test('appCheck 3', () => {
  expect(alphabetically(alphabetically([
    { name: 'мечник', health: 75 },
    { name: 'маг', health: 20 },
    { name: 'лучник', health: 10 },
  ]))).not.toBe([
    { name: 'мечник', health: 75 },
    { name: 'маг', health: 20 },
    { name: 'лучник', health: 10 },
  ]);
});
