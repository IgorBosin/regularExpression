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

Верно если состоит из 3-6 символов и одной цифры
let password = "abc123";
onsole.log( (/(?=\w{3,6})(?=\D*\d)/).test(password) );



Верно если если длина строки более 5 символов И имеет 2 последовательные цифры
let sampleWord = "bana12";
console.log( (/(?=\w{5,})(?=\D+\d{2})/).test(sampleWord) );



Задача №8. Повтор n-го числа ровно 3 раза 

let str1 = "42 42 42";
let str2 = '42 42 42 42'
console.log(/^(\d+) \1 \1$/.test(str1));
console.log(/^(\d+) \1 \1$/.test(str2));



Задача №9. Вернуть true если никнейм содержит только буквы и цифры и _

function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/
  return res.test(username)
    
}
console.log(validateUsr('asd43 34'))

