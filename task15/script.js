// Напишите функцию stepByStep(num1, num2, step),
// которая принимает два читсла numb1, numb2и аргумент step с количеством "шагов",
//  которые нужно построить между числами numb1 и num2.
// Функция должна возвращать массив чисел между num1 и num2, включая последние. Например, при вызове
// stepByStep(0, 10, 2)
// функция должна вернуть массив чисел [0, 5, 10], а при вызове
// stepByStep(20, 40, 5)
// функция должна вернуть массив чисел [20, 24, 28, 32, 36]

const stepByStep = (num1, num2, step) => {
  let tmp = [];
  for (let i = 0; i <= step; i++) {
    tmp[i] = num1 + (i * (num2 - num1)) / step;
  }

  return tmp;
};

console.log(stepByStep(20, 40, 5));