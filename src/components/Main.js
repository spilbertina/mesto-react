import Avatar from '../images/Avatar.svg'
import PenIcon from '../images/Edit-Button-desctop.svg'
import AddImg from '../images/Vector+.svg'

import React from 'react';

function Main(props) {
    console.log(props);
    return (
        <main className="content">
            <section className="profile">
                <img
                    className="profile__avatar"
                    src={Avatar}
                    alt="Фотография на автварке"
                />
                <button
                    className="profile__avatar-editing"
                    aria-label="Ручка"
                    type="button"
                ></button>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name"></h1>
                        <button
                            className="profile__edit"
                            aria-label="Редактировать профиль"
                            type="button"
                            onClick={props.onEditProfile}
                        >
                            <img
                                className="profile__icon-pen"
                                src={PenIcon}
                                alt="Рисунок ручки"
                            />
                        </button>
                    </div>
                    <p className="profile__job"></p>
                </div>
                <button
                    className="profile__button"
                    aria-label="Добавить"
                    type="button"
                >
                    <img
                        className="profile__icon-close"
                        src={AddImg}
                        alt="Крестик для добавления"
                    />
                </button>
            </section>

            <section className="cards">

            </section>
        </main>
    );
}

export default Main;