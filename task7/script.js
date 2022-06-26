// Напишите фукнцию myReplace(s1, s2, s3), которая будет принимать три строковых аргумента s1, s2, s3 и заменят ьв первом аргументе s1 все слова, совпадающие со вторым аргументом s2, на третий аргумент s3. Функция должна возвращать измененную строку. Например, вызов
// myReplace("Ехал Грека, через реку", "р", "л")
// должен вернуть строку "Ехал Глека, челез леку"

const myReplace = (s1, s2, s3) => {
  return s1.replace(new RegExp(s2, 'gi'), s3);
};

console.log(myReplace('Ехал Грека, через реку', 'р', 'л'));