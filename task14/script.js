// Напишите фукнцию sortEmail(arr),
// которая сортирует массив строк с электронными адресами по имени домена
// (точнее по части, идущей после символа "@")

const sortEmail = (arr) => {
  return arr.sort((a, b) => {
    let first = a.split('');
    for (let i = 0; i <= first.length; i++) {
      if (first[i] === '@') {
        first = first[i + 1];
      }
    }

    let second = b.split('');

    for (let i = 0; i <= second.length; i++) {
      if (second[i] === '@') {
        second = second[i + 1];
        second;
      }
    }

    if (first < second) {
      return -1;
    }

    if (first > second) {
      return 1;
    }
  });
};

console.log(sortEmail(['m@bsite.loc', 'm@csite.loc', 'm@asite.loc']));
