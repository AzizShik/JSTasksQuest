// Создайте функцию nextNumber(arr, n), которая принимает массив arr и
// необязательный параметр n с номером первого элемента, который должен быть возвращен возвращаемой функцией.
// Например, вызов фукнции
// const test = nextNumber([1, 2, 3]);
// test();1
// test();2
// test();3
// test();1

const nextNumber = (arr) => {
  let i = 0;
  return function () {
    if (i >= arr.length) {
      i = 0;
    }
    return arr[i++];
  };
};

const test = nextNumber([1, 2, 3]);
console.log(test());
console.log(test());
console.log(test());
console.log(test());
