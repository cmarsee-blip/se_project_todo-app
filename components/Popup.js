class Popup {
  constructor({ popupSelector }) {
    this._popupEl = document.querySelector(popupSelector);
  }

  open() {
    this._popupEl.classList.add("popup_visible");
  }
}
export default Popup;
