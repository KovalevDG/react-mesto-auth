import React from "react";

class ImagePopup extends React.Component {
  
   render() {
      return (
         <div className={`popup popup-image ${this.props.card.selectedCard ? 'popup_opened' : ''}`}>
            <div className="popup-image__container">
               <button className="popup__button-close popup-image__button-close" type="button" onClick={this.props.onClose}></button>
               <img className="popup-image__image" src={`${this.props.card.info.link}`} alt={this.props.card.info.name} />
               <h3 className="popup-image__title">{this.props.card.info.name}</h3>
            </div>
         </div>
      );
   } 
}

export default ImagePopup;