import { getByDisplayValue } from "@testing-library/dom";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const list = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const handleSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = ``;
  store.dispatch({ type: ADD_TODO, text: todo });
};

form.addEventListener("submit", handleSubmit);
