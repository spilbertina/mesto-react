import React from "react";

import SaveButton from '../images/Save-button.png'

function ImagePopup(props) {
    return (
        <div className={`popup popup_image ${props.link ? 'popup_show' : ''}`} onClick={() => props.onClose()}>
            <div className="popup__window-image">
                <button className="popup__close popup__close_image" type="button">
                    <img
                        className="popup__icon-close"
                        src={SaveButton}
                        alt="Крастик для закрытия формы"
                        onClick={() => props.onClose()}
                    />
                </button>
                <figure className="popup__figure">
                    <img
                        className="popup__figure-img"
                        src={props.link}
                        alt=""
                    />
                    <figcaption className="popup__figure-text"></figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
