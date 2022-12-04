const btn = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("1")! as HTMLInputElement;
const input2 = document.getElementById("2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

btn.addEventListener("click", () =>
  console.log(add(+input1.value, +input2.value))
);
