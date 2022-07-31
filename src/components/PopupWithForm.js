
import React from "react";

import SaveButton from '../images/Cross-button.png'

function PopupWithForm(props) {
    function handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) { props.onClose() }
    }

    return (
        <div className={`popup popup_${props.name} ${props.isShow ? 'popup_show' : ''}`} onClick={handleOverlayClick}>
            <div className="popup__window">
                <button className="popup__close" type="button" onClick={props.onClose}> 
                    <img
                        className="popup__icon-close"
                        src={SaveButton}
                        alt="Крастик для закрытия формы"
                    />
                </button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={props.name} >
                    {props.children}
                    <button className="popup__form-button" type="submit" > 
                        { props.buttonText }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
