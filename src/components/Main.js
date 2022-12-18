import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Main extends React.Component {
   static contextType = CurrentUserContext;

   render() {
      return (
         <main className="content">
            <section className="profile">
               <div className="profile__avatar" style={{ backgroundImage: `url(${this.context.avatar})` }}>
                  <div className="profile__avatar-overlay" onClick={this.props.onEditAvatar}></div>
               </div>
               <div className="profile__user">
                  <h1 className="profile__user-name">{this.context.name}</h1>
                  <button className="profile__edit-button" type="button"
                        onClick={this.props.onEditProfile}></button>
                  <p className="profile__user-job">{this.context.about}</p>
               </div>
               <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
            </section>
            <div className="elements">
               {  
                  this.props.cards.map((card) => {
                     return (
                        <Card key={card._id} card={card} onCardClick={this.props.onCardClick} onCardLike={this.props.onCardLike} onCardDelete={this.props.onCardDelete} />
                     );  
                  })   
               }
            </div>
         </main>
      );      
   }
}

export default Main;