
export default function checkHealth(param) {
  let healthyType;
  if (param.health > 50) {
    healthyType = 'Green';
    return healthyType;
  } if (param.health >= 15 && param.health <= 50) {
    healthyType = 'Yellow';
    return healthyType;
  } if (param.health < 15 && param.health >= 0) {
    healthyType = 'Red';
    return healthyType;
  }
  return 0;
}
