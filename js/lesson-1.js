// 1. Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//let number = prompt("Enter the number");
//number = Number(number);

//if (number === 10) {
//    alert("Right")
//} else {
//    alert("Wrong")
//}


2.
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

//const min = Math.floor(Math.random() * (59 - 0) + 0);
//let result;

//if (min >= 1 && min < 15) {
//    result = `${min} входить в 1 чверть`;
//}
//    else if (min >= 16 && min < 30) {
//        result = `${min} входить в 2 чверть`;
//    }
//    else if (min >= 31 && min < 45) {
//    result = `${min} входить в 3 чверть`;
//    }
//    else {
//    result = `${min} входить в 4 чверть`;
//    }
    
//alert(result);

3.
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

//let num = prompt("Choose your number betwen 1 and 4");

//let result;
//switch (num) {
//    case "1":
//        result = "Winter";
//        break;
//    case "2":
//        result = "Spring";
//        break;
//    case "3":
//        result = "Summer";
//        break;
//    case "4":
//        result = "Autumn";
//        break;
//    default:
//        result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//}

//console.log(result);



4.
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

//  let input = prompt("Введіть кількість хвилин:");
//  let totalMinutes = Number(input);


//  if (totalMinutes >= 0) {
  
//    let hours = Math.floor(totalMinutes / 60);
//    let minutes = totalMinutes % 60;

  
//    let formattedHours = String(hours).padStart(2, '0');
//    let formattedMinutes = String(minutes).padStart(2, '0');

  
//    console.log(`${formattedHours}:${formattedMinutes}`);
//  } else {
//    console.log("Error");
//  }






5.
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// let login = prompt("Enter your login");

// if (login === "Admin") {
//    let password = prompt("Enter your password");

//    if (password === "I am a boss") {
//        alert("Hello!");
//    } else {
//        alert("Wrong password");
//    }
//} else if(login === "" || login === null) {
//    alert("Cancelled");
//} else {
//    alert("I don't know you");
//}

6.
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.


// let number = 0;
    
// while (number <= 20) {
//     console.log(number)
//     number++;
// }









// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }

//   return a < b ? a : b;
// }

// console.log(min(7, 4));


// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);

//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// const result = getNumbers(5, 16);

// console.log(`Together ${result}`);

8.
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i); 
//     }
//   }
// }

// fizzBuzz(19);

9.
// Потрібно підрахувати кількість парних чисел у заданому діапазоні
// "Кількість парних чисел Count"

// const start = 1;
// const end = 20;


// let count = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     count++;
//   }
// }

// console.log(`Together ${count}`);