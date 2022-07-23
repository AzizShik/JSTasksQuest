// Напишите фукнцию extrackProps(arrObjects, prop),
// которая по значению аргумента prop вернет массив всех
// одноименных свойств из объектов массива arrObjects. Например, вызов
// extractProps([
//   {name:"Василий", age: 34}
//   {name:"Наталья", age: 27}
//   {name:"Джон", age: 19}
// ], "name");
// вернет массив ["Василий", "Наталья", "Джон"]

const extractProps = (arrObjects, prop) => {
  let arr = [];
  arrObjects.forEach((e) => {
    arr.push(e[prop]);
  });
  return arr;
};

console.log(
  extractProps(
    [
      {name: 'Василий', age: 34},
      {name: 'Наталья', age: 27},
      {name: 'Джон', age: 19},
    ],
    'name'
  )
);
