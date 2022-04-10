import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";
// import editIconPath from "../images/profile-edit-image-button.svg";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image-wrapper">
          <img
            className="profile__image"
            alt=""
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div
            className="profile__image-overlay"
            onClick={onEditAvatarClick}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__profession">{userDescription}</p>
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
      <section className="places">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
