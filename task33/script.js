// Напишите функцию timeAgo(dataObject), которая принимает
// объект Date и возвращает словесное описание произошедшего событся - "N T назад", где N - целое число
// соответствующее годам, или месяцам, или неделям, или дням, или часам. Например, вызов
// timeAgo(new Date(new Date()).getTime() + 1000*3600*24*365*21+1000)
// должен вернуть "21 год назад"

const genitive = (n, word) => {
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) {
    if (n % 10 === 1) res = word.singular;
    if (n % 10 < 5 && n % 10 > 1) res = word.many1;
  }
  return `${n} ${res}`;
};

const timeAgo = (dO) => {
  let res;
  const w = ' назад',
    hour = 1000 * 3600;

  dO = dO - new Date();
  switch (true) {
    case (res = dO / (hour * 24 * 365)) > 1:
      return (
        genitive(Math.floor(res), {
          singular: 'год',
          many1: 'года',
          many2: 'лет',
        }) + w
      );
    case (res = dO / (hour * 24 * 31)) > 1:
      return (
        genitive(Math.floor(res), {
          singular: 'месяц',
          many1: 'месяца',
          many2: 'месяцев',
        }) + w
      );
    case (res = dO / (hour * 24 * 7)) > 1:
      return (
        genitive(Math.floor(res), {
          singular: 'неделя',
          many1: 'недели',
          many2: 'недель',
        }) + w
      );
    case (res = dO / (hour * 24)) > 1:
      return (
        genitive(Math.floor(res), {
          singular: 'день',
          many1: 'дня',
          many2: 'дней',
        }) + w
      );
    case (res = dO / hour) > 1:
      return (
        genitive(Math.floor(res), {
          singular: 'час',
          many1: 'часа',
          many2: 'часов',
        }) + w
      );
  }
};

console.log;
timeAgo(new Date(new Date()).getTime() + 1000 * 3600 * 24 * 365 * 21 + 1000);

console.log(genitive(21, {singular: 'день', many1: 'дня', many2: 'дней'}));
