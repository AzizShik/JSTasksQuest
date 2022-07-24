// Реализуйте функцию differenceDays(d1, d2),
// которая возвращает количество дней (полных суток) между датами d1 и d2 заданными через конструктор Date.
// Например, вызов
// differenceDays(new Date(2018, 9, 5), new Date(2018, 9, 7))
// должен вернуть 2

const differenceDays = (d1, d2) => Math.floor((d2 - d1) / 1000 / 60 / 60 / 24);
console.log(differenceDays(new Date(2018, 9, 5), new Date(2018, 9, 7)));
