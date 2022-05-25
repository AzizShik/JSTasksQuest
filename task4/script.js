// Реализуйте функцию genitive(n, word). Функция принимает положительное целое чисто и объект word с вариантами записи слов для разных чисел. Объект word имеет свойства singular many1 many2, например {singular:'товар', many1:'товара', many2:'товаров'}. Функция должна корректо возвращать строку вида '2 товара' или '29 товаров'. 
//  Например, при вызове 
//  genitive(5, {singular:'курс', many1:'курса', many2:'курсов'})
//  функция должна вернуть строку '5 курсов'

const genitive = (n, word) => {
  let res = word.many2;
  if(n % 100 < 5 || n % 100  > 20) {
    if( n % 10 == 1) res = word.singular;
    if(n % 10 > 1 && n % 10 < 5) res = word.many1;
  }
  return `${n} ${res}`
}


console.log(genitive(5, {singular:'курс', many1:'курса', many2:'курсов'}))