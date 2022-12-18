import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Card extends React.Component{
   static contextType = CurrentUserContext;

   handleClick = () => {
      this.props.onCardClick(this.props.card);
   }
   
   handleLikeClick = () => {
      this.props.onCardLike(this.props.card);
   }

   handleDeleteClick = () => {
      this.props.onCardDelete(this.props.card);
   }

   render() {
      this.isOwn = this.props.card.owner._id === this.context._id;
      this.cardDeleteButtonClassName = (
         `element__delete ${this.isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
      ); 
      this.isLiked = this.props.card.likes.some(i => i._id === this.context._id);
      this.cardLikeButtonClassName = (`element__like-icon ${this.isLiked ? 'element_like-active' : ''}`);
      return (
         <article className="element">
            <div className="element__image" style={{ backgroundImage: `url(${this.props.card.link})` }} onClick={this.handleClick} />
            <button className={this.cardDeleteButtonClassName} onClick={this.handleDeleteClick} type="button"></button>
            <div className="element__description">
               <h2 className="element__text">{this.props.card.name}</h2>
               <div className="element__like">
                  <button className={this.cardLikeButtonClassName} type="button" onClick={this.handleLikeClick}></button>
                  <span className="element__like-counter">{this.props.card.likes.length}</span>
               </div>
            </div>
         </article> 
      );
   }
}

export default Card;