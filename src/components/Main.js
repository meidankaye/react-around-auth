import React from "react";
import { api } from "../utils/Api";
import editIconPath from "../images/profile-edit-image-button.svg";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image-wrapper">
          <img
            className="profile__image"
            alt="User Avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div
            className="profile__image-overlay"
            onClick={onEditAvatarClick}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <p className="profile__profession">Explorer</p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfileClick}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
      </section>

      {/* <section className="places"></section> */}
    </main>
  );
}

export default Main;
