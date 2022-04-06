/* eslint-disable jsx-a11y/img-redundant-alt */
function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <header className="header">
          <img
            src="<%= require('./images/header-logo.png')%>"
            alt="Across the U.S"
            className="header__image"
          />
        </header>
        <main className="main">
          <section className="profile">
            <div className="profile__image">
              <div className="profile__image-overlay">
                <img
                  src="<%= require('./images/profile-edit-image-button.svg')%>"
                  alt="Edit Button"
                />
              </div>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <p className="profile__profession">Explorer</p>
              <div className="profile__edit-button"></div>
            </div>
            <div className="profile__add-button"></div>
          </section>

          <section className="places"></section>
          <div className="popup popup_type_edit">
            <div className="popup__container">
              <div className="popup__close-button"></div>
              <h3 className="popup__title">Edit profile</h3>
              <form className="popup__form">
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  className="popup__input popup__input_type_name"
                  placeholder="Name"
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span className="popup__error" id="name-input-error"></span>
                <input
                  id="profession-input"
                  type="text"
                  name="profession"
                  className="popup__input popup__input_type_profession"
                  placeholder="About Me"
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span className="popup__error" id="profession-input-error"></span>
                <button className="popup__button" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_add">
            <div className="popup__container">
              <div className="popup__close-button"></div>
              <h3 className="popup__title">New Place</h3>
              <form className="popup__form">
                <input
                  id="title-input"
                  type="text"
                  name="title"
                  className="popup__input popup__input_type_title"
                  placeholder="Title"
                  required
                  minlength="1"
                  maxlength="30"
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
                <button className="popup__button" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_preview">
            <div className="popup__container popup__container_type_preview">
              <div className="popup__close-button"></div>
              <img
                src=" "
                alt="Image couldn't load"
                className="popup__image-preview"
              />
              <p className="popup__image-name"></p>
            </div>
          </div>
          <div className="popup popup_type_confirm">
            <div className="popup__container popup__container_type_confirm">
              <h3 className="popup__title popup__title_confirm">Are you sure?</h3>
              <div className="popup__close-button"></div>
              <form className="popup__form">
                <button className="popup__button" type="submit">
                  Yes
                </button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_avatar">
            <div className="popup__container popup__container_type_avatar">
              <h3 className="popup__title">Change profile picture</h3>
              <div className="popup__close-button"></div>
              <form className="popup__form">
                <input
                  id="avatar-input"
                  type="url"
                  name="link"
                  className="popup__input popup__input_type_link"
                  placeholder="Avatar link"
                  required
                />
                <span className="popup__error" id="avatar-input-error"></span>
                <button className="popup__button" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </main>
        <footer className="footer">
          <p className="footer__text">&#169; 2021 Around The U.S.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
