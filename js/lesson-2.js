//! Створіть масив styles з елементами 'jazz' і 'blues'
//!Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
//! Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');

styles[styles.indexOf('blues')] = 'blues';

for (let index = 0; index < styles.length; index++) {
    if (styles[index] === 'blues') {
        styles[index] = 'classic';
    };
};

//! Напишіть функцію logItems(array), яка приймає масив як аргумент
//! і виводить у консоль кожен його елемент у форматі:
//! "<номер елемента> - <значення елемента>".
//! Використайте цикл for для перебору елементів масиву.
//! Нумерація елементів повинна починатися з 1 (а не з 0).

const logItemsS = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
};

const logItems = (array) => {
    array.forEach((element, i) => {
        console.log(`${i + 1} - ${element}`);
    })
};
const arr = ['Charly', 'foxtrot', 'delta', 'bravo'];
logItems(arr);

//* Напишіть функцію checkLogin(array), яка:
//* Приймає масив логінів як аргумент.
//* Запитує ім'я користувача через prompt.
//* Перевіряє, чи є введене ім'я у переданому масиві.
//* Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
//* Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha", "Marvin"];

// const checkLogin = (array) => {
//     const userName = prompt('ху із ху?')
//     return array.includes(userName) ? alert(`Welcome, ${userName}`) : alert('User not found');
// };
// checkLogin(logins);

//? Напишіть функцію caclculateAverage(),
//? яка приймає довільну кількість
//? аргументів і повертає їхнє середнє значення.
//? Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) {
    let total = 0;
    for (const element of args) {
        if (typeof element !== 'number') {
            continue
        }
        total += element;
    }
    return total / args.length;
};

console.log(caclculateAverage(1, 5, 6, 33, 6, 1));
// console.log(typeof arr11[6]);

const calcAvg = (...args) => {
    if (!args.every(arg => typeof arg === "number")) {
        return `Argument has a non number value!`;
    }
    return args.reduce((acc, arg) => acc + arg, 0) / args.length
};

console.log(calcAvg(1, 5, 6, 33, 6, 1));



//! Напишіть функцію, яка сумуватиме сусідні числа
//! і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//!уточнення: складати необхідно перше число з другим, потім друге - з третім,
//! третє - з четвертим і так до кінця.
//!В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function onePlusTwo(arr) {
    const total = [];
    for (let index = 0; index < arr.length - 1; index++) {
        total.push(arr[index] + arr[index + 1]);
    }
    return total;
}
console.log(onePlusTwo(someArr));

//* Напишіть функцію findSmallestNumber(numbers),
//* яка шукає найменше число в масиві.
//* Додайте перевірку, що функція отримує саме масив, і
//* якщо функція отримує масив - поверніть з функції найменше число,
//* в іншому випадку - поверніть 'Sory, it is not an array!'.

function findSmallestNumber(numbers) {

    if (Array.isArray(numbers)) {
        let smallest = numbers[0];
        for (const number of numbers) {
            if (smallest > number) {
                smallest = number;
            }
        }
        return smallest;
    }
    return 'Sory, it is not an array!';
};

const numbers = [3, 5, 35, 56, 12, 24, 7, 80, 2];
console.log(findSmallestNumber(numbers));


//? Напишіть функцію findLongestWord(string), яка
//? приймає довільний рядок, що складається лише зі слів, розділених
//? пробілами (параметр string), і повертатиме найдовше слово у реченні.

//? Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// console.log(findLongestWordSec("London is the capital of Great Britains")); // 'Britains'

function findLongestWord(string) {
    const arr = string.split(' ');
    let acc = arr[0];
    arr.forEach((elm) => {
        elm.length > acc.length ? acc = elm : NaN;
    })
    return acc;
};

function findLongestWordSecSecond(str) {
    return str.split(" ").reduce((long, word) => (word.length > long.length ? word : long));
}


//! Напишіть скрипт, який для об'єкту user, послідовно:
//! 1 - додасть поле mood зі значенням 'happy',
//! 2 - замінить hobby на 'skydiving',
//! 3 - замінить значення premium на false,
//! 4 - виведе зміст об'єкта user у форматі
//! '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
};

function userLog(array) {
    user.mood = 'happy';
    user.hobby = 'skydiving';
    user.premium = false;
    for (const key of Object.keys(array)) {
        console.log(`${key} : ${array[key]}`);
    }
}
userLog(user);


//* Є об'єкт, в якому зберігаються зарплати команди
//* Напишіть код для додавання усіх зарплат та
//* збережіть його результат в змінній sum.
//* Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
};

function salarySlasher(salary) {
    let sum = 0;
    for (const name in salary) {
        sum += salary[name];
    }
    return sum;
}
console.log(salarySlasher(salaries));

//? Створіть об'єкт calculator з наступними методами:
//? read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
//? sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
//? mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
//? винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

//? Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
//? методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.exist() ? this.a + this.b : 'No such propeties';
    },
    mult() {
        return this.exist() ? this.a * this.b : 'No such propeties';
    },
    div() {
        return this.exist ? this.a / this.b : 'No such propeties';
    },
    exist() {
        return this.a >= 0 && this.b >= 0;
    }
};

// calculator.read(2, 7);
// console.log(calculator.mult());
// console.log(calculator.a);





//! Напишіть функцію calcTotalPrice(fruits, fruitName),
//! яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
//! Функція рахує і повертає загальну вартість фрукта
//! з таким ім'ям, ціною та кількістю з об'єкта.

//! Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
//! назвою фрукта, це також треба урахувати.

const fruits = [
    { name: "Яблуко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
    let totalQuan = 0;
    let totalPrice = 0;
    fruits.forEach(element => {
        if (element.name == fruitName) {
            totalPrice = element.price;
            totalQuan += element.quantity;
        }
    });
    return totalPrice * totalQuan;
}
console.log(calcTotalPrice(fruits, 'Банан'));
