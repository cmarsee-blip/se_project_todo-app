class Popup {
  constructor({ popupSelector }) {
    this._popupEl = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupEl.querySelector(".popup__close");
  }

  _handleEscapeClose() {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupEl.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupEl.classList.remove("popup_visible");
    // TODO - remove the escape listener
  }

  setEventListeners() {
    // this._popupCloseBtn.addEventListener("click", () => {
    //  this.close();
    // });

    // This one listener will handle close button and modal listener
    this._popupEl.addEventListener("mousedown", (evt) => {
      // if the event target's classList contains "pop__close" or "popup"
      // then close the modal
      // if (x || y)
      // if (evt.target)
    });
  }
}
export default Popup;
