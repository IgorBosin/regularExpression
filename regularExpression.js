Задача №1. Проверить правильность ввода e-mail

hello@gmail.com
@gmail.com
@gmail

^\w+@\w+\.\w+


  
Задача №2. Найти текст в переменной (true/false)

let str = 'I learn JS. Regular expression'
console.log(/regular/i.test(str)) // true



Задача №3. Найти текст в переменной и вывести в консоль

let str = 'I learn JS. Regular expression'
console.log(str.match(/regular/i)) // Regular



Задача №4. Найти число, длина которого не более 5 символов

let str = '12345 123456 1234567'
console.log(str.match(/\b\d{5}\b/g)) // 12345



Задача №5. Найти пользователя с нужным никнеймом. Использ. только буквы и цифры; длинее 2х символов; цифры могут быть только в конце; если 2 символа-только буквы

^[a-z]([0,9]{2,}|[a-z]+)\d*$



Задача №6. Вывод количества символов без пробелов

let whiteSpace = "Hi, I'm from Russia"
console.log( whiteSpace.match(/\S/g).length ); // 16



Задача №7. Упреждение (просмотр вперед)

/Jack(?=Sprat)/ соответствует 'Jack' только если за ним следует 'Sprat'.

Верно если состоит из 3-6 символов и хотя бы одной цифры
let password = "abc123";
console.log( (/(?=\w{3,6})(?=\D*\d)/).test(password) ); // true



Верно если если длина строки более 5 символов И имеет 2 последовательные цифры
let sampleWord = "bana12";
console.log( (/(?=\w{5,})(?=\D+\d{2})/).test(sampleWord) ); //true



Задача №8. Повтор n-го числа ровно 3 раза 

let str1 = "42 42 42";
let str2 = '42 42 42 42'
console.log(/^(\d+) \1 \1$/.test(str1)); // true
console.log(/^(\d+) \1 \1$/.test(str2)); // false



Задача №9. Вернуть true если никнейм содержит только буквы и цифры и _ (8 kyu Simple validation of a username with regex)

function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/
  return res.test(username)    
}
console.log(validateUsr('asd43 34')) // false



Задача №10. Вернуть true если текущий объект - цифра от 0 до 9 (8 kyu Regexp Basics - is it a digit?)

String.prototype.digit = function() {
  return /^[0-9]$/.test(this)
}
console.log('2'.digit()) // true



Задача №11. Удалить из полученного текста все цифры (8 kyu String cleaning)

function stringClean(s){
    return s.replace(/\d/g, '')
}
console.log(stringClean('E3at m2e2!!')) // Eat me!!



Задача №12. Вернуть true текст содержит определенные фразы (8 kyu A Strange Trip to the Market)

function isLockNessMonster(s) {
  return /tree fiddy|3.50|three fifty/.test(s)
}
console.log(isLockNessMonster(Your girlscout cookies are ready to ship. Your total comes to tree fiddy)) // true



Задача №13. Убрать все буквы из текста и вернуть число(Number) (8 kyu Get number from string)

function getNumberFromString(s) {
    return +s.replace(/\D/g, '')
}
console.log(getNumberFromString("this is number: 7")) // 7



Задача №14. Вернуть true если текст начинается с 1 или 2 или 3 (8 kyu validate code with simple regex)

function validateCode (code) {
 return /^[1,2,3]/.test(code)
}
console.log(validateCode(9453)) // false



Задача №15. Вернуть количество строчных символов (8 kyu Regex count lowercase letters)

function lowercaseCount(str){
    if (str.match(/[a-z]/g) == null) return 0 // когда будет принимать пустую строку даст null
    else {return str.match(/[a-z]/g).join('').length}
}
console.log(lowercaseCount("wedw")) // 4



function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}
console.log(lowercaseCount("wedw")) // 4
