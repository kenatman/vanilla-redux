import { getByDisplayValue } from "@testing-library/dom";
import { useLayoutEffect } from "react";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const list = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id, 10);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  list.innerHTML = ``;
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.innerText = toDo.text;
    li.id = toDo.id;
    btn.innerText = `DEL`;
    btn.addEventListener("click", dispatchDeleteToDo);
    list.appendChild(li);
    li.appendChild(btn);
  });
};
store.subscribe(() => console.log(store.getState()));
store.subscribe(paintToDos);

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = ``;
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", handleSubmit);
