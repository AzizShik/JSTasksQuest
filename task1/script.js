window.addEventListener('load', () => {
  //  Реализуйте функцию palmTree(n), которая будет принимать целое положительное n и возвращать строку, состоящую из символов 'p'. Например, вызов palmTree(3) приведет к тому, что функция вернет 'ppp'. Примечание: при нечисловом аргументе функция должна вернуть false, а при вызове без аргумента - один символ 'p'.

  function palmTree(n) {
    return typeof n === 'number' && n > 0 ? 'p'.repeat(n) : false;
  }

  console.log(palmTree(3));
  console.log(palmTree('a'));
});
