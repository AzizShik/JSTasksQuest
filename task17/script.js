// Напишите фукнцию randRange(n1, n2), которая возвращает случайное целое в диапазоне от n1 до n2.

const randRange = (n1, n2) => Math.floor(Math.random() * (n2 - n1) + n1);

console.log(randRange(0, 100));
