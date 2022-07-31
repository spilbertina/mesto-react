import React from 'react';
import '../index.css'

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isCreateCardPopupOpen, setIsCreateCardPopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true); }
    const handleCreateCardClick = () => { setIsCreateCardPopupOpen(true); }
    const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true); }
    const handleCardClick = (card) => { setSelectedCard(card); }


    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsCreateCardPopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="root">
            <div className="page">
                <Header />

                <Main
                    onEditProfile={handleEditProfileClick}
                    onEditAvatar={ handleEditAvatarClick }
                    onCreateCard={handleCreateCardClick}
                    onCardClick={handleCardClick} />

                <Footer />
            </div>

            <PopupWithForm
                name="profile"
                buttonText="Сохранить"
                isShow={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                title="Редактировать профиль">
                <input
                    className="popup__form-input"
                    id="name-input"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="popup__form-error name-input-error"></span>
                <input
                    className="popup__form-input"
                    id="job-input"
                    type="text"
                    name="job"
                    placeholder="О себе"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="popup__form-error job-input-error"></span>
            </PopupWithForm>

            <PopupWithForm
                name="card"
                buttonText="Создать"
                isShow={isCreateCardPopupOpen}
                onClose={closeAllPopups}
                title="Новое место">
                <input
                    className="popup__form-input"
                    id="title-input"
                    type="text"
                    name="title"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span className="popup__form-error title-input-error"></span>
                <input
                    className="popup__form-input"
                    id="link-input"
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__form-error link-input-error"></span>
            </PopupWithForm>

            <PopupWithForm
                name="avatar-editing"
                buttonText="Сохранить"
                isShow={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                title="Обновить аватар">
                <input
                    className="popup__form-input"
                    id="avatar-input"
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__form-error avatar-input-error"></span>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}>
            </ImagePopup>
        </div>
    );
}

export default App;
