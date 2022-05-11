window.addEventListener('load', () => {
  //  Реализуйте функцию autoReplace(needles, change, haystack), которая будт прнимать целое массив строк, которые нужно на строку change внутри строки haystack. Например, вызов функции.
  // autoReplace(['салат', 'помидоры'], 'еда', 'свежие помидоры пошли в салат')
  // должна вернуть строку "свежие еда пошли в еда".
  // Примечание: если хотите, тут можно использовать регулярные выражения, но это не обязательное требование, при этом регистр не должен учитываться. При отсутствии параметров должен вернуться false

  function autoReplace(needles, change, haystack) {
    if (!needles || !change || !haystack) return false;

    return haystack.replace(/needles.join("|")/, 'gi', change);
  }

  console.log(
    autoReplace(['салат', 'помидоры'], 'еда', 'свежие помидоры пошли в салат')
  );
  console.log(autoReplace());
});
