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
console.log(str.match(/regular/i))
