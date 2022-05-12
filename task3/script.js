// Создайте функцию autoTags(str, tags, url), которая принимает входную строку str, массив слов для замены на теги и базовый URL (по умолчанию должен иметь значениее "https://mysite.local/tag/"), которые нужно сделать в строке str. Например, вызов фукнции
// autoTags("интересно изучать js", ["html", "js"])
// должна вернуть строку "интересно изучать <a href="https://mysite.local/tag/js">@js</a>

function getAutoTags(base = 'https://mysite.local/tag/') {
  return (str, tags, url = base) => {
    tags = `(${tags.join('|')})`
    return str.replace(new RegExp(tags, 'gi'), `<a href="${url}$1">@$1</a> `);
  };
}

const autoTags = getAutoTags();

console.log(autoTags('интересно изучать js', ['html', 'js']));
