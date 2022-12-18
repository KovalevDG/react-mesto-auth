import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import React from 'react';
import { api } from '../utils/api.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

class App extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      cards: [],
      card: {
        selectedCard: false,
        info: '#',
      },
      currentUser: currentUser,
    }
  }

  componentDidMount() {
    api.getUserInfo()
      .then((user) => {
        this.setState({
            currentUser: user,
          });
       })
       .catch(err => {
          console.log(err);
       });
    api.getInitialCards()
       .then((cards) => {
          this.setState({ cards: cards });
       })
       .catch(err => {
          console.log(err);
       });
  }

  handleEditAvatarClick = () => {
    this.setState({isEditAvatarPopupOpen: true});
  }

  handleEditProfileClick = () => {
    this.setState({isEditProfilePopupOpen: true});
  }

  handleAddPlaceClick = () => {
    this.setState({isAddPlacePopupOpen: true});
  }

  handleCardClick = (cardInfo) => {
    this.setState({
      card: {
        selectedCard: true,
        info: cardInfo,
      }
    });
  }

  handleUpdateUser = (user) => {
    api.editUserInfo(user)
      .then((data) => {
        this.setState({
          currentUser: data,
        });
        this.closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUpdateAvatar = (avatar) => {
    api.editUserAvatar(avatar)
      .then((data) => {
        this.setState({
          currentUser: data,
        });
        this.closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  getNewStateCards(newCard, card) {
    return this.state.cards.map((c) => c._id === card._id ? newCard : c);
  }

  handleCardLike = (card) => {
    this.isLiked = card.likes.some(i => i._id === this.state.currentUser._id);
    api.changeLikeCardStatus(card, !this.isLiked)
      .then((newCard) => {
        this.cards = this.getNewStateCards(newCard, card);
        this.setState({cards: this.cards});
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteCards(card) {
    return this.state.cards.filter((c) => {
      return c._id !== card._id;       
    });
  }

  handleCardDelete = (card) => {
    this.cards = this.deleteCards(card);
    api.deleteCard(card)
      .then((card) => {
        this.setState({cards: this.cards});
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleAddPlaceSubmit = (card) => {
    api.postCards(card)
      .then((cards) => {
        this.setState({ cards: [cards, ...this.state.cards] });
      })
      .catch(err => {
        console.log(err);
      });
    this.closeAllPopups();
  }

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      card: {
        selectedCard: false,
        info: '#',
      }
    });
  }

  render() {
    return (
      <div className='page'>
        <div className='page__content'>
          <Header />
          <CurrentUserContext.Provider value={this.state.currentUser}>
            <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} cards={this.state.cards} onCardLike={this.handleCardLike} onCardDelete={this.handleCardDelete} />
            <Footer />
            <EditProfilePopup isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups} onUpdateUser={this.handleUpdateUser} />
            <EditAvatarPopup isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups} onUpdateAvatar={this.handleUpdateAvatar} />
            <AddPlacePopup isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups} onAddPlace={this.handleAddPlaceSubmit} />
          </CurrentUserContext.Provider>
          <ImagePopup card={this.state.card}  onClose={this.closeAllPopups} />
        </div>
      </div>
    );    
  }
}

export default App;
