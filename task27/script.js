// Реализуйте тело функции sequence(numArr) так,
// чтобы она возвращала другую функцию, возвращающуб поочередно элементы массива numArr. Например, первый вызов some()
// let some = sequence([10, 5, 2, 1])
// должен вернуть 10, потом 5 и так далее.

const sequence = (numArr) => {
  let i = 0;
  return () => numArr[i++];
};

let some = sequence([10, 5, 2, 1]);
console.log(some());
console.log(some());
console.log(some());
console.log(some());