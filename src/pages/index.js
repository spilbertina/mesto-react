import { VALIDATE_CONFIG } from '../utils/constans.js'
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/Popups/PopupWithForm.js'
import { PopupWithImage } from '../components/Popups/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { Api } from '../utils/Api/Api.js';

import '../pages/index.css';

const cardsSection = document.querySelector('.cards');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileNameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const popupProfileJobInput = popupProfile.querySelector('.popup__form-input[name=job]');

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardForm = popupCard.querySelector('.popup__form');

const popupAvatar = document.querySelector('.popup_avatar-editing');
const popupAvatarOpen = document.querySelector('.profile__avatar');
const popupAvatarForm = popupAvatar.querySelector('.popup__form');

const validatorNewCard = new FormValidator(VALIDATE_CONFIG, popupCardForm);
const validatorProfile = new FormValidator(VALIDATE_CONFIG, popupProfileForm);
const validatorAvatar = new FormValidator(VALIDATE_CONFIG, popupAvatarForm);

const profilePopup = new PopupWithForm('.popup_profile', handlePopupProfileFormSubmit);
const newCardPopup = new PopupWithForm('.popup_card', handlePopupCardFormSubmit);
const avatarPopup = new PopupWithForm('.popup_avatar-editing', handlePopupAvatarFormSubmit);
const imagePopup = new PopupWithImage('.popup_image');
const confirmPopup = new PopupWithForm('.popup_confirm-deleted', handleDeleteConfirm);

function createAllCard(cards) {
    cards.forEach(card => {
        const { owner: { _id: ownerId }, _id: cardId, name, link, likes } = card;
        const cardElement = createCard({ ownerId, cardId, name, link, likes });
        section.addItem(cardElement.getElement());
    });
}

function userInfoUpdate(res) {
    userInfo.setUserInfo({
        id: res._id,
        name: res.name,
        job: res.about,
    });

    userInfo.setAvatar(res.avatar);
}

//----------Функция для отправки формы popupProfile
function handlePopupProfileFormSubmit(info) {
    const data = {
        name: info.name,
        about: info.job
    }

    api.updateUserInfo(data)
        .then((user) => {
            userInfo.setUserInfo({
                id: user._id,
                name: user.name,
                job: user.about
            })
            profilePopup.close()
        })
        .catch(err => console.log(err))
        .finally(x => profilePopup.resetButtonText());
}

//----------Функция для создания новой карточки
function handlePopupCardFormSubmit(cardInfo) {
    const newCard = {
        name: cardInfo.title,
        link: cardInfo.link
    }
    api.addCard(newCard)
        .then((addedCard) => {
            newCard.ownerId = addedCard.owner._id;
            newCard.cardId = addedCard._id;
            newCard.likes = addedCard.likes;
            const card = createCard(newCard);
            section.addItem(card.getElement());
            newCardPopup.close()
        })
        .catch(err => console.log(err))
        .finally(x => newCardPopup.resetButtonText());
}

function handlePopupAvatarFormSubmit(data) {
    api.updateAvatar({ avatar: data.link })
        .then(result => {
            userInfo.setAvatar(result.avatar);
            avatarPopup.close();
        })
        .catch(err => console.log(err))
        .finally(x => avatarPopup.resetButtonText());
}

function handleCreateNewCard() {
    validatorNewCard.checkFormValidityBeforeOpen();
    newCardPopup.open();
}

function handleEditProfile() {
    const { name, job } = userInfo.getUserInfo();

    popupProfileNameInput.value = name;
    popupProfileJobInput.value = job;

    validatorProfile.checkFormValidityBeforeOpen();
    profilePopup.open();
}

function createCard(settings) {
    return new Card(
        '.template',
        userInfo,
        settings,
        hanblePopupImageOpen,
        hanbleCardSetLike,
        confirmPopup);
}

function hanblePopupImageOpen(link, text) {
    imagePopup.open(link, text);
}

function hanblePopupAvatarOpen() {
    validatorAvatar.checkFormValidityBeforeOpen();
    avatarPopup.open();
}

function hanbleCardSetLike(like) {
    like.isLike()
        ? api.deleteLike(like.getCardId())
            .then(x => like.setLike(x.likes))
            .catch(err => console.log(err))
            .finally()
        : api.setLike(like.getCardId())
            .then(x => like.setLike(x.likes))
            .catch(err => console.log(err))
            .finally();
}

function handleDeleteConfirm({ id }) {
    api.deleteCard(id)
        .then(()=>{
            confirmPopup.close();
        })
        .catch(err => console.log(err))
        .finally(() => {
            document.getElementById(id).remove();
            confirmPopup.resetButtonText();
        });
}

profilePopup.setEventListeners();
newCardPopup.setEventListeners();
imagePopup.setEventListeners();
avatarPopup.setEventListeners();
confirmPopup.setEventListeners();

popupCardOpen.addEventListener('click', handleCreateNewCard);
popupProfileOpen.addEventListener('click', handleEditProfile);
popupAvatarOpen.addEventListener('click', hanblePopupAvatarOpen);

validatorNewCard.enableValidation();
validatorProfile.enableValidation();
validatorAvatar.enableValidation();

const api = new Api(
    'https://mesto.nomoreparties.co/v1/',
    'cohort-43',
    'ee068133-e055-42c6-88de-c45211ca2bd0');

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    jobSelector: '.profile__job',
    avatarSelector: '.profile__avatar'
});

const section = new Section('.cards', (data) => {
    const card = createCard(data);
    cardsSection.append(card.getElement());
});

const userAllCardPromice = api.getInitialCards();
const userInfoPromice = api.getUserInfo();
Promise.all([userInfoPromice, userAllCardPromice])
    .then(([user, cards]) => {
        userInfoUpdate(user);
        createAllCard(cards);
    })
    .catch(err => console.log(err))
    .finally();