import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import Login from "./Login";
import Register from "./Register";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import api from "../utils/api";
import { register, authorize } from "../utils/auth";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = React.useState([]);
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    });
  }

  function handleUpdateUser(userData) {
    api
      .updateProfile(userData)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleUpdateAvatar(userData) {
    api
      .updateUserImage(userData)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

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

  function handleChange(e) {
    const { type, value } = e.target;
    setValues({ ...values, [type]: value });
  }

  function handleLogin(values) {
    authorize(values)
      .then((res) => {
        if (res) {
          setValues(res.email);
          setLoggedIn(true);
          setToken(res.token);

          navigate("/");
        } else {
          throw new Error("No token recieved!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(undefined);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            element={
              <>
                <div className="page">
                  <div className="page__wrapper">
                    <CurrentUserContext.Provider value={currentUser}>
                      <Header />
                      <Main
                        onEditProfileClick={handleEditProfileClick}
                        onAddPlaceClick={handleAddPlaceClick}
                        onEditAvatarClick={handleEditAvatarClick}
                        cards={cards}
                        onConfirmclick={handleConfirmClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                      />
                      <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                      />
                      <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlaceSubmit={handleAddPlaceSubmit}
                      />
                      <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                      />
                      <PopupWithForm
                        name="confirm"
                        title="Are you sure?"
                        submitButton="Yes"
                        isOpen={isConfirmPopupOpen}
                        onClose={closeAllPopups}
                      />
                      <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                      />
                      <Footer />
                    </CurrentUserContext.Provider>
                  </div>
                </div>
              </>
            }
          />
        }
      />
      <Route
        path="/signin"
        element={
          <>
            <Header />
            <Login onLogin={handleLogin} onChange={handleChange} />
          </>
        }
      />
      <Route 
        path="/signup"
        element={
          <>
            <Header />
            <Register onChange={handleChange} />
          </>
        } 
      />
    </Routes>
  );
}

export default App;
