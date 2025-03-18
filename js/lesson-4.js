//! task 1
// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
// console.log(body);
// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');
// console.log(title);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
// console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topic = document.querySelectorAll('[data-topic]')
// console.log(topic);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log(topic[0]);
// topic[0].style.color = 'red';
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// topic[topic.length - 1].style.color = 'blue';
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const neiborhood = title.nextElementSibling;
// console.log(neiborhood);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3titles = document.querySelectorAll('h3');
// console.log(h3titles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3titles.forEach(a => a.classList.add('active'))
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navig = document.querySelector('li[data-topic="navigation"]');
// console.log(navig);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navig.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
navig.querySelector('p').textContent = 'Я змінив тут текст!';
// 13 - створи 
const currentTopic = "manipulation"; 
// після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// console.log(document.querySelector(`[data-topic="${currentTopic}"]`));

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
document.querySelector(`[data-topic="${currentTopic}"]`).style.backgroundColor = 'skyblue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// console.log(document.querySelector('.completed'));
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
document.querySelector('.completed').parentElement.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
title.insertAdjacentHTML('afterend', `
    <p>Об'єктна модель документа (Document Object Model)</p>
    `);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р)
// - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
//  тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

document.querySelector('.list').insertAdjacentHTML('beforeend', `
    <h3>Властивість innerHTML</h3>
    <p>
    Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
    `);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
document.querySelector('.list').innerHTML = '';

//!Завдання 2:
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const mainBlock = document.createElement('div');
mainBlock.classList.add('number-container');
const markup = [];
for (let index = 0; index <= 100; index++) {
    const number = randomNumber();
    if (number % 2 === 0) {
        markup.push(`<div class="number even">${number}</div>`)
    } else {
         markup.push(`<div class="number odd">${number}</div>`)
    }
};
mainBlock.innerHTML = markup.join('');
document.querySelector('.list').append(mainBlock);

// const conDiv = document.createElement('div');
// conDiv.classList.add('number-container');
// const frag = document.createDocumentFragment();

// for (let index = 0; index < 100; index++) {
//     const div = document.createElement('div');
//     div.classList.add('number');
//     div.textContent = randomNumber();
//     div.textContent % 2 === 0 ? div.classList.add('even') : div.classList.add('odd');
//     frag.appendChild(div);
// }
// conDiv.appendChild(frag);
// console.log(conDiv);
// body.append(conDiv);

//!Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const input = document.querySelector('input');
input.addEventListener('input', handleInput);
function handleInput(Event) {
    if (Event.target.value.length > 6) {
        input.classList.add('success');
        input.classList.remove('error');
    } else {
        input.classList.add('error');
        input.classList.remove('success');
    }
}
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener('focus', (evt) => {
    if (evt.target.value.length === 0) {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid lime';
    }
})

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener('blur', (evt) => {
    if (evt.target.value.length === 0) {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid lime';
    }
})

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('form');

form.addEventListener('submit', handlSubmit);
const checkBox = document.querySelector('input[type="checkbox"]');
const userName = document.querySelector('.js-username-output');
const user = {
    userName: 'Anonymus'
}

function handlSubmit(evt) {
    evt.preventDefault()    ;
    if (!checkBox.checked || input.value == '') {
        console.log('Не заповненна форма!');
        return;
    } else {
        user.userName = input.value;
    }
    console.log(user);
    userName.innerHTML = input.value;
    // console.log(evt.currentTarget.elements.userName);
    
};

//!Завдання 4:
 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
 
const box = document.querySelector('.box');
document.querySelector('#increase').addEventListener('click', handleInc);
document.querySelector('#decrease').addEventListener('click', handleDec);
const BOXADDICT = 20;

function handleInc() {
    box.style.width = `${box.clientWidth + BOXADDICT}px`;
    box.style.height = `${box.clientHeight + BOXADDICT}px`;
};

function handleDec() {
    box.style.width = `${box.clientWidth - BOXADDICT}px`;
    box.style.height = `${box.clientHeight - BOXADDICT}px`;
}