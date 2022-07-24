// Напишите функцию validPhone(phone), которая на вход принимает строку с номером телефона, а возвращает строку типа "+XXXXXXXXXXXХ",
// где X - любое целое от 0 до 9. Причем, на месте пустых "вводов" должны присутствовать символы подчеркивания "_".
// При задании некорректного символа, функция должна вернуть false. Например, вызов
// validPhone("+7495")
// должен вернуть "+7495_______"

const validPhone = (p) => {
  if (!/^\+\d{0,11}$/.test(p)) {
    return false;
  }
  let phone = p;
  for (let i = 0; i <= 12 - p.length - 1; i++) {
    phone += 'X';
  }
  return phone;
};

console.log(validPhone('+7495'));
console.log(validPhone('xxxx'));
