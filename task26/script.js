// Напишите функцию fibNthElement(n), которая получает целое число n,
// а возвращает n-й элемент последовательности Фибоначчи(1, 1, 2, 3...)
// Например, вызов функции fibNthElement(4) должна вернуть 3

const fibNthElement = (n) => {
  const s = 5 ** 0.5;
  return Math.round((((1 + s) / 2) ** n - ((1 - s) / 2) ** n) / s);
};

console.log(fibNthElement(4))