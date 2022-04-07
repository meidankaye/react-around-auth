function PopupWithForm({
  name,
  isOpen,
  title,
  onClose,
  submitButton,
  children,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form">
          {children}
          <button className="popup__button" type="submit">
            {submitButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
