// Напишите функцию daysAgo(dataObject), которая принимает
// объект Date и возвращает словесное описание произошедшего события - "N дн.назад.".
// Например, если текущая дата 16.05.2022, а функция вызвывается с датой соответствующей 14.05.2022, результат возврата
// функции должен быть "2 дн. назад" (на самом деле надо учитывать кол-во часов).
// daysAgo(new Date(new Date.getTime() + 1000*3600*24+1000)
// должен вернуть "1 день назад"

const genitive = (n, word) => {
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) {
    if (n % 10 == 1) res = word.singular;
    if (n % 10 > 1 && n % 10 < 5) res = word.many1;
  }
  return `${n} ${res}`;
};

const daysAgo = (obj) => {
  let diff = Math.round((obj - new Date()) / (1000 * 3600 * 24));
  return (
    genitive(diff, {singular: 'день', many1: 'дня', many2: 'дней'}) + ' назад'
  );
};

console.log(daysAgo(new Date(new Date().getTime() + 1000 * 3600 * 24 + 1000)));
