// 1 - отримай body елемент і виведи його в консоль;

const bodyElem = document.querySelector("body");
console.log(bodyElem)

// 2 - отримай елемент id="title" і виведи його в консоль;

const title = document.querySelector("#title");
console.log(title)

// 3 - отримай елемент class="list" і виведи його в консоль;

const list = document.querySelector(".list");
console.log(list)

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const dataTopic = document.querySelectorAll("[data-topic]")
console.log(dataTopic)

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const dataTopicFirst = document.querySelector("[data-topic]")
console.log(dataTopicFirst)

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const elements = document.querySelectorAll("[data-topic]");
const dataTopicLast = elements[elements.length - 1];
console.log(dataTopicLast)

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const h1 = document.querySelector("h1");
const nextSibling = h1.nextElementSibling;
console.log(nextSibling);

const previousSibling = h1.previousElementSibling;
console.log(previousSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const h3 = document.querySelectorAll("h3");
h3.forEach(header => {
    console.log(header.textContent)
})

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

h3.forEach(header => header.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navItem = document.querySelector('li[data-topic="navigation"]');
console.log(navItem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

if (navItem) {
    navItem.style.backgroundColor = "yellow";
}
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const navText = navItem.querySelector("p")
if (navText) {
    navText.textContent = "Я змінив тут текст!"
}

console.log(navText)

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут
// data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation"

const element = document.querySelector(`[data-topic = ${currentTopic}]`)

console.log(element)



// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

if (element) { element.style.backgroundColor = "blue" };

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completed = document.querySelector(".completed")

console.log(completed)

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const listItems = document.querySelectorAll("li")

listItems.forEach(li => {
    const header = li.querySelector(".completed")
    if (header) {
        li.remove();
    }
    console.log(header)
})

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

/*h1*/
const paragraph = document.createElement("p");

paragraph.textContent = "Об'єктна модель документа (Document Object Model)";

h1.insertAdjacentElement("afterend", paragraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це -
// "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newListItem = document.createElement("li")
list.append(newListItem);

// const newListItemHeader = document.createElement("h3")
// newListItemHeader.textContent = "Властивість innerHTML"
// newListItem.insertAdjacentElement("afterbegin", newListItemHeader);

// const newListItemText = document.createElement("p");
// newListItemText.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newListItem.insertAdjacentElement("beforeend",newListItemText)


// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
newListItem.innerHTML =
    `<h3>"Властивість innerHTML"</h3>
    <p>"Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"</p>`

// 20 - очисти список

// list.innerHTML = "";

// 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const container = document.querySelector(".number-container")

for (let i = 0; i < 100; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    const div = document.createElement("div");
    div.classList.add("number");
    div.textContent = number;
    

    if (number % 2 === 0) {
        div.classList.add("even");
    } else {
        div.classList.add("odd");
    }

    container.appendChild(div);
}




// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".contact-form")
const input = form.querySelector("input")
const checkbox = form.querySelector(".contact-form-checkbox");
const span = document.querySelector("span");


input.addEventListener("input", () => {
    if (input.value.length > 6) {
        input.classList.add("success");
        input.classList.remove("error");
    } else {
        input.classList.remove("success");
        input.classList.add("error");
    }
    span.textContent = input.value;
})

input.addEventListener("focus", () => {
    if (input.value.trim().length === 0) {
        input.style.outline = "3px solid red";
    } else {
        input.style.outline = "3px solid green";
    }
})

input.addEventListener("blur", () => {
    if (input.value.trim().length === 0) {
        input.style.outline = "3px solid red";
    } else {
        input.style.outline = "3px solid lime";
    }
}) 

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = input.value.trim();
    const checkBoxChecked = checkbox.checked;

    if (username !== "" && checkBoxChecked) {
        console.log("User:", username);
        
        input.value = "";
        checkbox.checked = false;
        span.textContent = "Anonymous";
    } else {
        alert("Please enter your name and accept Ts&Cs")
    }
})

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector(".box")
const decrease = document.querySelector("#decrease")
const increase = document.querySelector("#increase")

decrease.addEventListener("click", () => {
    const currentWidth = box.offsetWidth;
    const currentHeight = box.offsetHeight;


    const newSize = Math.max(20, currentWidth - 20);
    box.style.width = newSize + "px";
    box.style.height = newSize + "px";
});

increase.addEventListener('click', () => {
    const currentWidth = box.offsetWidth;
    const currentHeight = box.offsetHeight;

    const newSize = currentWidth + 20;
    box.style.width = newSize + 'px';
    box.style.height = newSize + 'px';
});






