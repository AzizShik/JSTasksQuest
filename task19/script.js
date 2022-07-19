// Есть объект со структурой

const categories = {
  category: 'Компьютеры',
  next: {
    category: 'Ноутбуки',
    next: {
      category: 'Все ноутбуки',
      next: {
        category: 'Игровые',
        next: null,
      },
    },
  },
};

// Написать функцию category(categories), которая принимает объект типа categories и возвращает строку. Например, вызов

// category(categories)

// должен вернуть строку 'Компьютеры/Ноутбуки/Все ноутбуки/Игровые'

const category = (obj) => {
  let res = '';
  do res += obj.category + '/';
  while ((obj = obj.next));
  return res.slice(0, -1);
};

console.log(category(categories));
