// Дан массив объектов

const users = [
  {name: 'Василий', lang: 'JavaScript', age: 23},
  {name: 'Яна', lang: 'Java', age: 35},
  {name: 'Олег', lang: 'Python', age: 19},
  {name: 'Наталья', lang: 'C#', age: 20},
  {name: 'Ольга', lang: 'PHP', age: 29},
];

// Реализуйте фукнцию sortBy(usersArray, prop), которая принимает массив подобный массиву users
// и строчное название поле сортировки prop, которое по умолчанию равно "name",
// в возвращает массив объектов по возрастанию числового признака или по алфавиту для строкового признака.

const sortBy = (arr, p) => {
  if (p === 'name' || p === 'lang') {
    return arr.sort((a, b) => {
      if (b[p][0] > a[p][0]) {
        return -1;
      }

      if (a[p][0] > b[p][0]) {
        return 1;
      }
    });
  }

  if(p === 'age') {
    return arr.sort((a, b) => {
      return a[p] - b[p]
    })
  }
};

console.log(sortBy(users, 'age'));
