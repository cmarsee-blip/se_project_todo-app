import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();

    const values = { name, date, id };
    // todosList.append(todo); // Use addItem method instead
    addTodoPopup.close();

    const todo = generateTodo(values);
    section.addItem(todo);
    todoCounter.updateTotal(true);

    newTodoValidator.resetValidation();
  },
});
addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  // Use the renderTodo to create todo instance
  // Pass the the created todo as a param in the addItem(todo)
  renderer: renderTodo, //
  containerSelector: ".todos__list",
});
section.renderItems(initialTodos);
// call section instance's renderItems method
// const todos = generateTodo(initialTodos);

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

function renderTodo(todoData) {
  const todo = generateTodo(todoData);
  // return todo
  section.addItem(todo);
}
