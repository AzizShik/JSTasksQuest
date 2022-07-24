// Реализуйте функцию days(), которая возвращает
// количество дней (полных суток) оставшихся до грядущего Нового Года.

const days = () => {
  const date = new Date();
  const newYear = new Date(`January 1, ${date.getFullYear() + 1} 00:00:00`);
  return Math.floor((newYear - date) / 1000 / 60 / 60 / 24);
};

console.log(days());
