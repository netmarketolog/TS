// ex1
var age = 50;
var myName = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
//ex2
var anything = -20;
anything = "Text";
anything = {};
// ex3
var some;
some = "Text";
var str;
if (typeof some === "string")
    str = some;
// ex4
var person = ["Max", 21];
// ex 5
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var statusLoader = {
    status: Status.LOADING
};
statusLoader.status == Status.LOADING
    ? console.log("LOADING")
    : console.log("READY");
// ex 6
var union;
// ex 7
var literal;
// ex8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "online",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: "5",
    accounts: ["Alex"],
    status: "offline"
};
