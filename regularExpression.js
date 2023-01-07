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



Задача №4. Найти число, длина которого не более 5 знаков

let str = '12345 123456 1234567'
console.log(str.match(/\b\d{5}\b/g)) // 12345



Задача №5. Найти пользователя с нужным никнеймом. Использ. только буквы и цифры; длинее 2х символов; цифры могут быть только в конце; если 2 символа-только буквы

^[a-z]([0,9]{2,}|[a-z]+)\d*$
