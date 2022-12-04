// ex1

let age: number = 50;
let myName: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => {
  return 100 + a;
};

//ex2

let anything: any = -20;
anything = "Text";
anything = {};

// ex3

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") str = some;

// ex4

let person: [string, number] = ["Max", 21];

// ex 5

enum Status {
  LOADING,
  READY,
}

const statusLoader = {
  status: Status.LOADING,
};
statusLoader.status == Status.LOADING
  ? console.log("LOADING")
  : console.log("READY");

// ex 6

let union: string | number;

// ex 7

let literal: "enabel" | "disable";

// ex8

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// ex9

type Person = {
  title: string;
  likes: string | number;
  accounts: string[];
  status: "online" | "offline";
  details?: {
    createAt: string | Date;
    updateAt: string | Date;
  };
};
const page1: Person = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "online",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Person = {
  title: "Python or Js",
  likes: "5",
  accounts: ["Alex"],
  status: "offline",
};
