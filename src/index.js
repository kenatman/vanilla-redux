import { getByDisplayValue } from "@testing-library/dom";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const list = document.querySelector("ul");

const displayTodo = (todo) => {
  const li = document.createElement("li");
  li.innerText = todo;
  list.appendChild(li);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  displayTodo(todo);
  input.value = ``;
};

form.addEventListener("submit", handleSubmit);
