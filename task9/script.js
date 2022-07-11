// Напишите фукнцию directionByKeyCode(keyCode), которая принимает одно из чисел 87, 65, 68, 83, а возвращает соответственно одну из строк "вверх ↑", "вниз ↓", "влево ←", "вправо →",

// Например, вызов

// directionByKeyCode(87)
// должен вернуть "вверх ↑"

const directionByKeyCode = (keyCode) => {
  switch (keyCode) {
    case 87:
      return 'вверх ↑';
    case 83:
      return 'вниз ↓';
    case 65:
      return 'влево ←';
    case 68:
      return 'вправо →';
  }
};

console.log(directionByKeyCode(87));
