import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupEl.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // move to constructor
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const inputValues = {};
    this._inputList.forEach((input) => {
      // TODO
      // add a key/value pair for each input
      // the key is input.name
      // the value is input.value (1st lesson, Sprint 4 Ch 5)
      // need to use brackets notation, not dot notation
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      // TODO - Pass result of _getInputValues to submission handler
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
