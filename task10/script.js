// Напишите фукнцию byDesc(arr), которая на вход принимает числовой массив и возвращает массив отсортированный по убыванию. Например, вызов byDesc([3, 10, 2, 7]) должен вернуть [10, 7, 3, 2];

const byDesc = (arr) => {
  return arr.sort((a, b) => b - a);
};

console.log(byDesc([3, 10, 2, 7]));
