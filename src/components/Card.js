import React from "react";

function Card(props) {  
    return (
        <div className="element">
            <img
                className="element__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={ ()=> { props.onCardClick(props.card) } }
            />
            <button
                className="element__trash"
                aria-label="Мусорная корзина"
                type="button"
            ></button>
            <div className="element__info">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__number-of-likes">
                    <button
                        className="element__like"
                        aria-label="Сердечко"
                        type="button"
                    ></button>
                    <span className="element__number">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;