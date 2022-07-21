// Написать фукнцию getWordStat(str),
// которая принимает строковую переменную str, а возвращает объект.
// Каждое совйство объекта - слово из аргумента str, а значение свойства - количество вхождений этого слова в строке str.
// В возвращающемся объекте не должны учитываться знаки препинания,
// пробельные символы и пустые строки. Например, вызов getWordStat('Ехал грека через реку реку реку')
// должен вернуть
// {
// 'Ехал': 1,
// 'Грека': 1,
// 'через': 1,
// 'реку': 3,
// }

const getWordStat = (str) => {
  const obj = {};
  // const strArr = str.split(/[, . : ! ?]/g).filter(item => item === ' ' ? '' : item);
  // let uniqueStr = new Set(strArr);

  // uniqueStr.forEach((item) => {
  //   obj[item] = 0;
  // });

  // uniqueStr = Array.from(uniqueStr);

  // for (let i = 0; i <= Object.keys(obj).length; i++) {
  //   for (let j = 0; j < strArr.length; j++) {
  //     if (uniqueStr[i] === strArr[j]) {
  //       obj[uniqueStr[i]] = obj[uniqueStr[i]] + 1;
  //     }
  //   }
  // }

  str.split(/[,. :?!]/g).forEach((e) => {
    if (!e) return;

    if (!(e in obj)) {
      obj[e] = 0;
    }

    obj[e] = obj[e] + 1;
  });

  return obj;
};

console.log(getWordStat('Эй, Ехал Грека через реку реку реку!?'));
