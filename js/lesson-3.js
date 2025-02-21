//? Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(number => number * number);
console.log(`%cTask 1: ${newNumbers}`, 'color: green;');

//? Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];

const newData = data.flatMap(obj => obj.values);
console.log(`%cTask 2: ${newData}`, 'color: red;');


//? Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

console.log(people.some(obj => obj.age < 20));


//? Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers1 = [2, 4, 6, 8, 10];

console.log(numbers1.every(number => !(number % 2)));


//? Завдання 5:
// Знайдіть перше непарне число

const numbers2 = [2, 1, 6, 8, 9, 10, 12];

console.log(numbers2.find(obj => obj % 2));

//? Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

console.log(numbersArray.toSorted());

//? Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

console.log(stringArray.toSorted( (a, b) => a.localeCompare(b)));


//? Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

console.table(users.toSorted((a, b) => a.age - b.age));


// ?Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
]

console.table(user.filter(obj => obj.age > 20));

// ? Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.reduce((acc, number) => acc += number));

// ? Завдання 11:

//  Створи клас для калькулятора, який має такі методи:
//  - метод number, який набуває початкового значення для наступних операцій
//  - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
//  - методи add, substruct, divide, multiply
//  Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

class Calculator {
    result = 0;

    number(value) {
        this.result = value;
        return this;
    }

    add(value) {
        this.result += value;
        return this;
    }

    substruct(value) {
        this.result -= value;
        return this;
    }

    divide(value) {        
        this.result /= value;
        return this;    
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    getResult() {        
        return this.result;
    }
}
const calc = new Calculator();
const total = calc
    .number(5)
    .multiply(10)
    .substruct(20)
    .divide(2)
    .getResult();
console.log("%c#_#_#_#_#_#_#_#_#_#_#_#_", "color: red; font-size: 20px");

console.log(`%c task 11total: ${total}`, 'color: green; font-size: 20px');


// ? Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

class Client {
    #login;
    #email;

    constructor(name, email) {
        this.#login = name;
        this.#email = email;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get login() {
        return this.#login;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    get email() {
        return this.#email;
    }
}

// ? Завдання 13:
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // ##### Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  //  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

class Person {
    name;
    age;
    gender;
    email;

    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email
        }
    }
}
class Employee extends Person {
    salary;
    department;
    constructor(name, age, gender, email, salary = 0, department) {
        super(name, age, gender, email);
        this.salary = salary;
        this.department = department;
    }

    getEmployeeDetails() {
        return {
            ...this.getDetails(),
            salary: this.salary,
            department: this.department
        }
    }
}

const marvin = new Employee("Marvin", 21, "male", "some@some", 4500, 'Full Stack');
console.table(marvin);
