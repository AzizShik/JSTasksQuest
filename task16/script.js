// Напишите функцию gradient(color1, color2, step),
// которая принимает две строки с цветами в формате "rrggbb" в переменные color1, color2 и аргумент step с количеством
// "шагов", которые нужно построить между цветами color1 и color2.
// Функция должна возвращать массив строк с промежуточными цветами в формате rgb().

function gradient(color1, color2, step) {
  const w = (c, m, k) => parseInt(c.slice(m, k), 16);

  let r1 = w(color1, 1, 3);
  g1 = w(color1, 3, 5);
  b1 = w(color1, 5);

  let r2 = w(color2, 1, 3);
  g2 = w(color2, 3, 5);
  b2 = w(color2, 5);

  let arr = [];

  let r, g, b;

  for (let i = 0; i <= step; i++) {
    r = Math.round(r1 + (i * (r2 - r1)) / step);
    g = Math.round(g1 + (i * (g2 - g1)) / step);
    b = Math.round(b1 + (i * (b2 - b1)) / step);
    arr.push(`rgb(${r}, ${g}, ${b})`);
  }

  return arr;
}

console.log(gradient('#336699', '#89ef12', 5));
