import editIconPath from "../images/profile-edit-image-button.svg";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image">
          <div className="profile__image-overlay" onClick={onEditAvatarClick}>
            <img src={editIconPath} alt="Edit Button" />
          </div>
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
