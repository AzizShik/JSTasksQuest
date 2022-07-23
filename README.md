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

### Task 8

Напишите фукнцию getPhraseByNum(n), которая принимает целое число n в диапазоне от 0 до 9999 и возвращает строку с описанием числа. Например, вызов функции

getPhraseByNum(2310)

должен вернуть строку "две тысячи триста десять"

### Task 9

Напишите фукнцию directionByKeyCode(keyCode), которая принимает одно из чисел 87, 65, 68, 83, а возвращает соответственно одну из строк "вверх ↑", "вниз ↓", "влево ←", "вправо →",

Например, вызов

directionByKeyCode(87)
должен вернуть "вверх ↑"

### Task 10

Напишите фукнцию byDesc(arr), которая на вход принимает числовой массив и возвращает массив отсортированный по убыванию. Например, вызов byDesc([3, 10, 2, 7]) должен вернуть [10, 7, 3, 2];

### Task 11

Напишите фукнцию oddity(arr), которая на вход принимает числовой массив и возвращает массив отсортированный так, что в начале массива идут все нечетные числа, а потом все четные. Например, вызов oddity([3, 10, 2, 7]) должен вернуть [7, 3, 10, 2]. Формально, правильным ответом является и [3, 10, 2, 7], но мы будем придерживаться детерминисткого подхода

### Task 12

Напишите фукнцию byLength(arr), которая на вход принимает массив строк, а возвращает массив строк отсортированный по убыванию количества символов в строке. Например, вызов byLength(["колхоз", "гладиолус", "вода", "книга", ]) должен вернуть [ "гладиолус", "колхоз", "книга", "вода", ]

### Task 13

Дан массив объектов

const users = [
{name: 'Василий', lang: 'JavaScript', age: 23},
{name: 'Яна', lang: 'Java', age: 35},
{name: 'Олег', lang: 'Python', age: 19},
{name: 'Наталья', lang: 'C#', age: 20},
{name: 'Ольга', lang: 'PHP', age: 29},
];

Реализуйте фукнцию sortBy(usersArray, prop), которая принимает массив подобный массиву users
и строчное название поле сортировки prop, которое по умолчанию равно "name",
в возвращает массив объектов по возрастанию числового признака или по алфавиту для строкового признака.

### Task 14

// Напишите фукнцию sortEmail(arr),
// которая сортирует массив строк с электронными адресами по имени домена
// (точнее по части, идущей после символа "@")

### Task 15

Напишите функцию stepByStep(num1, num2, step),
которая принимает два читсла numb1, numb2и аргумент step с количеством "шагов",
которые нужно построить между числами numb1 и num2.
Функция должна возвращать массив чисел между num1 и num2, включая последние. Например, при вызове
stepByStep(0, 10, 2)
функция должна вернуть массив чисел [0, 5, 10], а при вызове
stepByStep(20, 40, 5)
функция должна вернуть массив чисел [20, 24, 28, 32, 36]

### Task 16

Напишите функцию gradient(color1, color2, step),
которая принимает две строки с цветами в формате "rrggbb" в переменные color1, color2
и аргумент step с количеством "шагов", которые нужно построить между цветами color1 и color2.
Функция должна возвращать массив строк с промежуточными цветами в формате rgb().

### Task 17

Напишите фукнцию randRange(n1, n2), которая возвращает случайное целое в диапазоне от n1 до n2.

### Task 18

Написать функцию nearestDisnace(point, points),
которая принимает объект point сщ свойствами x и y соответствующими координатам на плоскости,
и массив points подобных объектов с другими координатами.
Функция должна возвращать индекс ближайшей точки из массива pints

### Task 19

Есть объект со структурой

const categories = {
category: 'Компьютеры',
next: {
category: 'Ноутбуки',
next: {
category: 'Все ноутбуки',
next: {
category: 'Игровые',
next: null,
},
},
},
};

Написать функцию category(categories), которая принимает объект типа categories и возвращает строку. Например, вызов
category(categories)
должен вернуть строку 'Компьютеры/Ноутбуки/Все ноутбуки/Игровые'

### Task 20

Как представить 9500руб как можно меньшим количеством купюр достоинством 5000, 2000, 200, 100 рублей?
Напишите фукнцию search(n), которая принимает целое число кратное ста и возвращает
объект со свойствами в виде номинала купюр и значениями - их количеством
Например, вызов
search(12100)
должен вернуть объект {'100': 1, '200': 1, '5000': 2}

### Task 21

Написать фукнцию getWordStat(str),
которая принимает строковую переменную str, а возвращает объект.
Каждое совйство объекта - слово из аргумента str, а значение свойства - количество вхождений этого слова в строке str.
В возвращающемся объекте не должны учитываться знаки препинания,
пробельные символы и пустые строки. Например, вызов getWordStat('Ехал грека через реку реку реку')
должен вернуть
{
'Ехал': 1,
'Грека': 1,
'через': 1,
'реку': 3,
}

### Task 22

Напишите фукнцию extrackProps(arrObjects, prop),
которая по значению аргумента prop вернет массив всех
одноименных свойств из объектов массива arrObjects. Например, вызов
extractProps([
{name:"Василий", age: 34}
{name:"Наталья", age: 27}
{name:"Джон", age: 19}
], "name");
вернет массив ["Василий", "Наталья", "Джон"]

### Task 23

Написать функцию bmi(m,h),
которая принимает аргументы m (массу тела в килограммах) и h (рост человека в метрах), а возвращает индекс мыссы тела.
Например, при массе человека 100кг и росте 1.8массе
bmi(100,1.8)
функция должна вернуть 30.86

### Task 24

Напишите функцию quadro(), которая будет принимать
неограниченное количетсво целочисленных аргументов,
а возвращать массив квадратов этих чисел
Например, вызов
quadro(2, 6, 10, 4)
должен вернуть [4, 36, 100, 16]

### Task 25

Напишите функцию fib(n), которая получает целое число n,
а возвращает массив из n элементов последовательности Фибоначчи (0, 1, 1, 2, 3 , 5...)
Например, при вызове функция
fib(4)
должна вернуть массив [0, 1, 1, 2]
