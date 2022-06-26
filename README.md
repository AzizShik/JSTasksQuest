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

### Task 5

Создайте объект classNames со свойствами cname и методами
add ( String, [String] ) Добавляет к cname классы
remove ( String, [String] ) Удаляет из cname классы
toggle ( String, [Boolean] ) Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.
Например, значение classNames.cname = 'btn'. После вызова className.toggle('btn-primary') значение classNames.cname должно стать 'btn btn-primary'. При повторном вызове classNames.toggle('btn-primary'), значение должно вернуться в 'btn'.

### Task 6

Напишите фукнцию lorem(n), которая принимает положительное целое n (от 1 до 455) и при вызове возвращает строку длиной n символов из строки
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus eius vel facere suscipit error aliquid at illum molestias cumque accusantium autem alias perspiciatis magnam fugiat ipsa aut, sequi magni quam! Aliquid reiciendis nostrum quasi assumenda mollitia deleniti et quam, asperiores aspernatur ipsum porro libero consequatur minima laboriosam consectetur quisquam illum eum esse aliquam nemo excepturi nesciunt? Lorem ipsum dolor sit amet et"

### Task 7
Напишите фукнцию myReplace(s1, s2, s3), которая будет принимать три строковых аргумента s1, s2, s3 и заменят ьв первом аргументе s1 все слова, совпадающие со вторым аргументом s2, на третий аргумент s3. Функция должна возвращать измененную строку. Например, вызов

myReplace("Ехал Грека, через реку", "р", "л")

должен вернуть строку "Ехал Глека, челез леку"

