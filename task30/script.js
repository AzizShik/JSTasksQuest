// Реализуйте функцию differenceTimes(d1, d2), которая возвращает строку в
// формате 'hh:mm:ss' соответствующую разнице между двумся датами в часах, минутах и секундах.
// Например, вызов
const differenceTimes = (d1, d2) => {
  let hours = Math.floor((d2 - d1) / 1000 / 60 / 60);
  let minutes = Math.floor(((d2 - d1) / 1000 / 60) % 60);
  let seconds = Math.floor(((d2 - d1) / 1000) % 60);

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds}`;
};

console.log(
  differenceTimes(
    new Date(2022, 7, 24, 10, 10, 20),
    new Date(2022, 7, 24, 12, 23, 24)
  )
);
console.log(
  differenceTimes(
    new Date(2022, 7, 24, 10, 10, 20),
    new Date(2022, 7, 27, 12, 23, 24)
  )
);
