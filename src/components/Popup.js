import React from "react";

function Popup(props) {
   return (
      <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
         <div className={`popup-${props.name}__container`}>
            <button className={`popup__button-close popup-${props.name}__button-close`} type="button" onClick={props.onClose}></button>
            <h3 className={`popup-${props.name}__title`}>{props.title}</h3>
            {props.children}
         </div>
      </div>
   );
}

export default Popup;