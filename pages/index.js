import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = evt.target.name.value;
    const dateInput = evt.target.date.value;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();

    const values = { name, date, id };
    renderTodo(values);
    // todosList.append(todo); // Use addItem method instead
    addTodoPopup.close();

    const todo = generateTodo(values);
    section.addItem(todo);

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
// call section instance's renderItems method
// const todos = generateTodo(initialTodos);

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

// const openModal = (modal) => {
//  modal.classList.add("popup_visible");
// };

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

// addTodoCloseBtn.addEventListener("click", () => {
//  addTodoPopup.close();
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();

//   const values = { name, date, id };
//   renderTodo(values);
//   // todosList.append(todo); // Use addItem method instead
//   addTodoPopup.close();

//   newTodoValidator.resetValidation();
// });

// initialTodos.forEach((item) => {
//  renderTodo(item);
//  todosList.append(todo); // Use addItem method instead
// });

function renderTodo(todoData) {
  const todo = generateTodo(todoData);
  // return todo
  section.addItem(todo);
}
