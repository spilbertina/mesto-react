import React from 'react';

import penIcon from '../images/Edit-Button-desctop.svg'
import addImg from '../images/Vector+.svg'
import api from '../utils/Api/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo() ,api.getInitialCards()])
        .then(([userInfo, cards]) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar)
            setCards(cards);
        })
        .catch(err => console.log(err))
       
    }, []);
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={userAvatar} alt="Фотография на автварке" />
                <button className="profile__avatar-editing"
                    aria-label="Ручка"
                    type="button"
                    onClick={props.onEditAvatar}>
                </button>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                            className="profile__edit"
                            aria-label="Редактировать профиль"
                            type="button"
                            onClick={props.onEditProfile}>
                            <img className="profile__icon-pen" src={penIcon} alt="Рисунок ручки" />
                        </button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__button" aria-label="Добавить" type="button" onClick={props.onCreateCard}>
                    <img className="profile__icon-close" src={addImg} alt="Крестик для добавления" />
                </button>
            </section>

            <section className="cards">
                {cards.map((card, i) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    );
}

export default Main;