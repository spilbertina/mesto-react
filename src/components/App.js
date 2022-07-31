import React from 'react';
import '../index.css'

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import SaveButton from '../images/Save-button.png'
import Vector from '../images/Vector+.svg'


import PopupWithForm from './PopupWithForm';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const handleEditProfileClick = () => { setIsEditProfilePopupOpen (true); } 

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        // setIsAddPlacePopupOpen(false);
        // setIsEditAvatarPopupOpen(false);
        // setSelectedCard(null);
    }

    return (
        <div className="root">
            <div className="page">
                <Header />

                <Main onEditProfile={handleEditProfileClick} />

                <Footer />
            </div>

            <PopupWithForm
                name="profile"
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

            {/* <div className="popup popup_profile">
                <div className="popup__window">
                    <button className="popup__close" type="button">
                        <img
                            className="popup__icon-close"
                            src={SaveButton}
                            alt="Крастик для закрытия формы"
                        />
                    </button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form" name="profile" noValidate>
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
                        <button className="popup__form-button" type="submit" disabled>
                            Сохранить
                        </button>
                    </form>
                </div>
            </div> */}

            {/* <div className="popup popup_card">
                <div className="popup__window">
                    <button className="popup__close" type="button">
                        <img
                            className="popup__icon-close"
                            src={SaveButton}
                            alt="Крастик для закрытия формы"
                        />
                    </button>
                    <h2 className="popup__title">Новое место</h2>
                    <form className="popup__form" name="card" noValidate>
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
                        <button className="popup__form-button" type="submit" disabled>
                            Создать
                        </button>
                    </form>
                </div>
            </div>

            <div className="popup popup_image">
                <div className="popup__window-image">
                    <button className="popup__close popup__close_image" type="button">
                        <img
                            className="popup__icon-close"
                            src={SaveButton}
                            alt="Крастик для закрытия формы"
                        />
                    </button>
                    <figure className="popup__figure">
                        <img
                            className="popup__figure-img"
                            src={Vector}
                            alt=""
                        />
                        <figcaption className="popup__figure-text"></figcaption>
                    </figure>
                </div>
            </div>

            <div className="popup popup_confirm-deleted">
                <div className="popup__window popup__window_confirm-deleted">
                    <button className="popup__close popup__close_image" type="button">
                        <img
                            className="popup__icon-close"
                            src={SaveButton}
                            alt="Крастик для закрытия формы"
                        />
                    </button>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form className="popup__form" name="delete-confirm" noValidate>
                        <input
                            className="popup__form-input"
                            type="url"
                            name="id"
                            hidden
                        />
                        <button className="popup__button-confirm-deleted">Да</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_avatar-editing">
                <div className="popup__window popup__window_avatar-editing">
                    <button className="popup__close" type="button">
                        <img
                            className="popup__icon-close"
                            src={SaveButton}
                            alt="Крастик для закрытия формы"
                        />
                    </button>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form className="popup__form" name="avatar" noValidate>
                        <input
                            className="popup__form-input"
                            id="avatar-input"
                            type="url"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__form-error avatar-input-error"></span>
                        <button className="popup__form-button" type="submit">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>

            <template className="template">
                <div className="element">
                    <img
                        className="element__image"
                        src={Vector}
                        alt=""
                    />
                    <button
                        className="element__trash"
                        aria-label="Мусорная корзина"
                        type="button"
                    ></button>
                    <div className="element__info">
                        <h2 className="element__title"></h2>
                        <div className="element__number-of-likes">
                            <button
                                className="element__like"
                                aria-label="Сердечко"
                                type="button"
                            ></button>
                            <span className="element__number">3</span>
                        </div>
                    </div>
                </div>
            </template> */}
        </div>
    );
}

export default App;
