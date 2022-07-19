// Написать функцию nearestDisnace(point, points),
// которая принимает объект point сщ свойствами x и y соответствующими координатам на плоскости,
//  и массив points подобных объектов с другими координатами.
//  Функция должна возвращать индекс ближайшей точки из массива pints

const nearestDisnace = (p, ps) => {
  let t = ps.map((e, i) => ((e.x - p.x) ** 2 + (e.y - p.y) ** 2) ** 0.5);
  return t.indexOf(Math.min(...t));
};

console.log(nearestDisnace({x:0, y:0}, [
  {x:10, y:10},
  {x:2, y:5},
  {x:3, y:4}
]))