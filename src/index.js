const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let counter = 0;

number.innerText = counter;

const update = () => {
  number.innerText = counter;
};

const handleAdd = () => {
  counter = counter + 1;
  update();
};
const handleMinus = () => {
  counter = counter - 1;
  update();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
