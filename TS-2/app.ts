//Задайте правильные ts типы, для классических js;
// let age = 50;
// let name = "Max";
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => {
//   return 100 + a;
// };

let age: number;
let personName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
personName = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

// или
// const age = 50;
// const name = "Max";
// const toggle = true;
// const empty = null;
// const notInitialize = undefined;
// const callback = (a: number) => {
//   return 100 + a;
// };

// Задавайте тип для переменной в которую можно сохранить любое значение.
// let anything = -20;
// anything = "Text";
// anything = {};

let anything: any;

anything = -20;
anything = "Text";
anything = {};

//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some: unknown;
// some = "Text";
// let str: string;
// str = some;

let some: string;

some = "Text";
let str: string;
str = some;

//Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
//let person = ['Max', 21];

let person: [string, number];

person = ["Max", 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Status {
  LOADING,
  READY,
}

const statusLoader = {
  status: Status.LOADING,
};

if (statusLoader.status === Status.LOADING) console.log("LOADING");
console.log("READY");

// Сделайте переменную, которая может принимать или строку или число.

let strOrNum: string | number;

strOrNum = 10;
strOrNum = "max";

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let oneValue: "enable" | "disable";

oneValue = "enable";
oneValue = "disable";

// Укажите типы для следующих функций
// function showMessage(message) {
//   console.log(message);
// }
// function calc(num1, num2) {
//   return num1 + num2;
// }
// function customError() {
//   throw new Error("Error");
// }

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//Создайте свой тип данных на основе имеющихся данных.
// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };
// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

type Person = {
  name: string;
  tel: number;
  email: string;
  age: {
    howOld: number;
    birthday: Date;
  };
  sex?: "MAN" | "WOMEN";
  local: {
    localCord?: number[];
    dwellingPlace: string;
  };
};

const pers1: Person = {
  name: "Alex",
  tel: 65465654654,
  email: "sdkjfksd",
  age: {
    howOld: 30,
    birthday: new Date(),
  },
  local: { dwellingPlace: "sdkjfnsdk" },
};

const pers2: Person = {
  name: "Hi",
  tel: 65465654654,
  email: "sdkjfksd",
  age: {
    howOld: 30,
    birthday: new Date(),
  },
  sex: "MAN",
  local: {
    localCord: [53.5465, 45.5454],
    dwellingPlace: "sdkjfnsdk",
  },
};
