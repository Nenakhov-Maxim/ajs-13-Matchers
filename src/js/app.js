/* const hero = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]; */

export default function alphabetically(param) {
  const alphabeticallyArray = param.sort((a, b) => b.health - a.health);
  return alphabeticallyArray;
}
