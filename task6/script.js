// Напишите фукнцию lorem(n), которая принимает положительное целое n (от 1 до 455) и при вызове возвращает строку длиной n символов из строки
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus eius vel facere suscipit error aliquid at illum molestias cumque accusantium autem alias perspiciatis magnam fugiat ipsa aut, sequi magni quam! Aliquid reiciendis nostrum quasi assumenda mollitia deleniti et quam, asperiores aspernatur ipsum porro libero consequatur minima laboriosam consectetur quisquam illum eum esse aliquam nemo excepturi nesciunt? Lorem ipsum dolor sit amet et"

const lorem = (n) => {
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus eius vel facere suscipit error aliquid at illum molestias cumque accusantium autem alias perspiciatis magnam fugiat ipsa aut, sequi magni quam! Aliquid reiciendis nostrum quasi assumenda mollitia deleniti et quam, asperiores aspernatur ipsum porro libero consequatur minima laboriosam consectetur quisquam illum eum esse aliquam nemo excepturi nesciunt? Lorem ipsum dolor sit amet et';

    return text.slice(0, n);
};

console.log(lorem(100));
