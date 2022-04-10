import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleConfirmClick() {
    setIsConfirmPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(undefined);
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onConfirmclick={handleConfirmClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          name="edit"
          title="Edit profile"
          submitButton="Save"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name-input"
            type="text"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error" id="name-input-error"></span>
          <input
            id="profession-input"
            type="text"
            name="profession"
            className="popup__input popup__input_type_profession"
            placeholder="About Me"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error" id="profession-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="New Place"
          submitButton="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="title-input"
            type="text"
            name="title"
            className="popup__input popup__input_type_title"
            placeholder="Title"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="popup__error" id="title-input-error"></span>
          <input
            id="link-input"
            type="url"
            name="link"
            className="popup__input popup__input_type_link"
            placeholder="Image link"
            required
          />
          <span className="popup__error" id="link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Change profile picture"
          submitButton="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar-input"
            type="url"
            name="link"
            className="popup__input popup__input_type_link"
            placeholder="Avatar link"
            required
          />
          <span className="popup__error" id="avatar-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
        name="confirm"
        title="Are you sure?"
        submitButton="Yes"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
