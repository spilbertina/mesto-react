import React from "react";

import crossButton from '../images/Cross-button.png'

function ImagePopup(props) {  
    if (props.card == null) { 
        return;
    }

    function handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) { props.onClose() }
    }

    return (
        <div className={`popup popup_image ${props.card ? 'popup_show' : ''}`} onClick={handleOverlayClick}>
            <div className="popup__window-image">
                <button className="popup__close popup__close_image" type="button">
                    <img
                        className="popup__icon-close"
                        src={crossButton}
                        alt="Крастик для закрытия формы"
                        onClick={() => props.onClose()}
                    />
                </button>
                <figure className="popup__figure">
                    <img
                        className="popup__figure-img"
                        src={props.card.link}
                        alt={props.card.name}
                    />
                    <figcaption className="popup__figure-text">{props.card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
