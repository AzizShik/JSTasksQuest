// Создайте объект classNames со свойствами cname и методами

// add ( String, [String] ) Добавляет к cname классы
// remove ( String, [String] ) Удаляет из cname классы
// toggle ( String, [Boolean] ) Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.

// Например, значение classNames.cname = 'btn'. После вызова className.toggle('btn-primary') значение classNames.cname должно стать 'btn btn-primary'. При повторном вызове classNames.toggle('btn-primary'), значение должно вернуться в 'btn'.

const classNames = {
  cname: '',
  add: function (...s) {
    let cname = this.cname.split(' ');
    let tmp = {};
    for (let i in cname) {
      tmp[cname[i]] = 1;
    }
    s.forEach(function (e) {
      tmp[e] = 1;
    });
    this.cname = '';
    for (let i in tmp) {
      this.cname += i + ' ';
    }
    this.cname = this.cname.trim();
  },
  remove: function (...s) {
    let cname = this.cname.split(' ');
    let tmp = {};
    for (let i in cname) {
      tmp[cname[i]] = 1;
    }
    s.forEach(function (e) {
      if (e in tmp) delete tmp[e];
    });
    this.cname = '';
    for (let i in tmp) {
      this.cname += i + ' ';
    }
    this.cname = this.cname.trim();
  },
  toggle: function (str, flag) {
    let cname = this.cname.split(' ');
    let tmp = {};
    for (let i in cname) {
      tmp[cname[i]] = 1;
    }
    if (str in tmp || (!flag && flag != undefined)) {
      delete tmp[str];
    } else if (!(str in tmp || flag)) {
      tmp[str] = 1;
    }
    this.cname = '';
    for (let i in tmp) {
      this.cname += i + ' ';
    }
    this.cname = this.cname.trim();
  },
};

classNames.add('btn');
classNames.toggle('btn-primary');
console.log(classNames);
