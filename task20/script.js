// Как представить 9500руб как можно меньшим количеством купюр достоинством 5000, 2000, 200, 100 рублей?
// Напишите фукнцию search(n), которая принимает целое число кратное ста и возвращает
// объект со свойствами в виде номинала купюр и значениями - их количеством
// Например, вызов
// search(12100)
// должен вернуть объект {'100': 1, '200': 1, '5000': 2}

const search = (n) => {
  const obj = {};
  const par = [5000, 2000, 1000, 500, 200, 100, 50];
  par.forEach((item) => {
    obj[item] = Math.floor(n / item);
    n = n % item;
  });
  return obj;
};

console.log(search(12100));
