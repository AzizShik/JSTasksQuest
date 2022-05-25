# JSTasksQuest

### Task 1

Реализуйте функцию palmTree(n), которая будет принимать целое положительное n и возвращать строку, состоящую из символов 'p'. Например, вызов palmTree(3) приведет к тому, что функция вернет 'ppp'. Примечание: при нечисловом аргументе функция должна вернуть false, а при вызове без аргумента - один символ 'p'.

### Task 2

Реализуйте функцию autoReplace(needles, change, haystack), которая будт прнимать целое массив строк, которые нужно на строку change внутри строки haystack. Например, вызов функции.
autoReplace(['салат', 'помидоры'], 'еда', 'свежие помидоры пошли в салат')
должна вернуть строку "свежие еда пошли в еда".
Примечание: если хотите, тут можно использовать регулярные выражения, но это не обязательное требование, при этом регистр не должен учитываться. При отсутствии параметров должен вернуться false

### Task 3

Создайте функцию autoTags(str, tags, url), которая принимает входную строку str, массив слов для замены на теги и базовый URL (по умолчанию должен иметь значениее "https://mysite.local/tag/"), которые нужно сделать в строке str. Например, вызов фукнции
autoTags("интересно изучать js", ["html", "js"])
должна вернуть строку "интересно изучать <a href="https://mysite.local/tag/js">@js</a>

### Task 4

Реализуйте функцию genitive(n, word). Функция принимает положительное целое чисто и объект word с вариантами записи слов для разных чисел. Объект word имеет свойства singular many1 many2, например {singular:'товар', many1:'товара', many2:'товаров'}. Функция должна корректо возвращать строку вида '2 товара' или '29 товаров'. 
Например, при вызове 
genitive(5, {singular:'курс', many1:'курса', many2:'курсов'})
функция должна вернуть строку '5 курсов'
