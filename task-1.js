// it's link for my site 
// https://romasolohub.github.io/LernJs/
let result;
let year = prompt('Какой год крещения Руси?', '');
if (year == 998) {
  alert('Верно!')
  result = 1;
}  else {
  alert('Не верно')
  result = 0};
let hbdTaras = prompt('Год рождения Тараса Шевченко?', '');
if (hbdTaras == 1814) {
   alert ('Верно! А Вы знаток.');
   result = ++result
} else {
        alert ('Увы...Не верно')
    result = result};
let god = prompt('Сколько есть заповедей Божьих?', '');
if (god == 10) {
    alert ('Верно! Май Бога в серці');
    result = ++result
} else {
    alert ('Не верно... Май Бога в серці')
    result = result};
let yearNow = prompt('Какой сейчас год?', '');
if (yearNow == 2021) {
    alert ('Верно!Хорошо что хоть это знаете.')
    result = ++result;
} else {
    alert ('Не верно. Посмотри на календарь.')
    result = result};
let ter = prompt('Сколько пальцев на лапе у собаки?', '');
if (ter == 4) {
    alert ('Верно! Ваш пес доволен!')
    result = ++result;}
     else {
    alert ('Не верно. Спроси у своего пса) ')
    result = result};
alert ("Ваш результат: " +result )

    