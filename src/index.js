import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const selection = Object.freeze({ add: `ADD`, minus: `MINUS` });

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case selection.add:
      return count + 1;
    case selection.minus:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

add.addEventListener("click", () => {
  countStore.dispatch({ type: selection.add });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: selection.minus });
});

countStore.subscribe(() => {
  number.innerText = countStore.getState();
});
