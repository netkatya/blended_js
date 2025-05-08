// Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// let index = styles.indexOf('blues');
// if (index !== -1) {
//   styles[index] = 'classic';
// }
    
// function logItems(array) {
//     for (i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);




// Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const userName = prompt("Type your name");
//     if (array.includes(userName)) {
//             alert(`Welcome, ${userName}!`)
//     } else {
//         alert("User not found")
//     }
// }

// checkLogin(logins);


// Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === 'number' && !isNaN(arguments[i])) {
//             sum += arguments[i];
//             count++;
//         }
//     }
//     return count === 0 ? 0 : sum / count;
// }

// console.log(caclculateAverage(1, 2, 3))
// console.log(caclculateAverage("s", "0", true))



// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function addNeighbourNumbers() {
//     const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
//     let newArr = [];

//     for (let i = 0; i < someArr.length - 1; i++) {
//         newArr.push(someArr[i] + someArr[i + 1]);
//     }

//     return newArr;
// }

// console.log(addNeighbourNumbers());







// Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';
//     } else {
//         let smallest = numbers[0];
//         for (let i = 1; i < numbers.length; i++) {
//             if (numbers[i] < smallest) {
//                 smallest = numbers[i];
//             }
//         }
//         return smallest;
//     }
// }

//     console.log(findSmallestNumber(numbers));





// Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string) {
//     const stringParts = string.split(" ");
//     let longestWord = stringParts[0];

//     for (let i = 1; i < stringParts.length; i++) {
//         if (stringParts[i].length > longestWord.length) {
//             longestWord = stringParts[i];
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'









// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//     user.mood = "happy";
//     user.hobby = "skydiving";
//     user.premium = false;
    

// for(let key of Object.keys(user)) {
//     console.log(`${key} : ${user[key]}`);
// }







// Завдання 8:








// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;


// for (let salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum);







// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
    
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     sum() {
//     return this.a + this.b;
//     },
    
//     mult() {
//     return this.a * this.b;
//     },
// }

// calculator.read(10, 38);
// console.log(calculator.sum());
// console.log(calculator.mult());









// Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];
  
// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             totalPrice += fruit.price * fruit.quantity;
//         }
//     }
//     return totalPrice;
// }


// console.log(calcTotalPrice(fruits, "Банан"));







// Написати функцію clearArray(array), котра створить новий масив
// в якому не буде значень, які приводяться до false


// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function clearArray(array) {
//     let newArr = [];
//     for (const item of array) {
//         if (item) {
//             newArr.push(item);
//         }
//     }
//     console.log(newArr);
// }

// clearArray(array);



// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.
// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// function checkKeyInObject(obj, key) {
//     //return key in obj;
//     for (const keyObj in obj) {
//         if (keyObj === key) {
//             return true;
//         }
//     }
//     return false;
// }

// abo

// return Boolean(obj[key]);




// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   {name: "John", age: 30},
//   {name: "Jane", age: 25},
//   {name: "Bob", age: 40},
// ];

// function getPropertyValues(arr, key) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i][key]);
//   }
//   return result;
// }

// console.log(getPropertyValues(myArr, "name"));
// console.log(getPropertyValues(myArr, "age"));



// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`
// const orders = [
//   { id: 1, product: 'Футболка', quantity: 2, price: 15 },
//   { id: 2, product: 'Шорти', quantity: 3, price: 20 },
//   { id: 3, product: 'Кросівки', quantity: 1, price: 50 }
// ];

// function calcTotalPrice(orders) {
//     let totalAmount = 0;
//     for (const order of orders) {
//         totalAmount += order.price * order.quantity;
//     }
//     return totalAmount;
// }


// console.log(calcTotalPrice(orders));

