//Задайте правильные ts типы, для классических js;
// let age = 50;
// let name = "Max";
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => {
//   return 100 + a;
// };
var age;
var personName;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
personName = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) {
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
var anything;
anything = -20;
anything = "Text";
anything = {};
//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some: unknown;
// some = "Text";
// let str: string;
// str = some;
var some;
some = "Text";
var str;
str = some;
//Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
//let person = ['Max', 21];
var person;
person = ["Max", 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var statusLoader = {
    status: Status.LOADING,
};
if (statusLoader.status === Status.LOADING)
    console.log("LOADING");
console.log("READY");
// Сделайте переменную, которая может принимать или строку или число.
var strOrNum;
strOrNum = 10;
strOrNum = "max";
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var oneValue;
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
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var pers1 = {
    name: "Alex",
    tel: 65465654654,
    email: "sdkjfksd",
    age: {
        howOld: 30,
        birthday: new Date(),
    },
    local: { dwellingPlace: "sdkjfnsdk" },
};
var pers2 = {
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
