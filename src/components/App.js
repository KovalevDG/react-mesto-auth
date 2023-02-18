import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import React from 'react';
import { api } from '../utils/api.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';
import { Navigate, Route, Routes} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import * as mestoAuth from '../utils/mestoAuth.js';
import Login from './Login';
import Register from './Register';

class App extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isAuthPopupOpen: true,
      cards: [],
      card: {
        selectedCard: false,
        info: '#',
      },
      currentUser: currentUser,
      loggedIn: false,
      headerLink: 'Регистрация',
      headerRoute: 'sign-in',
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

  handleChangeHeaderLink = (headerLink) => {
    this.setState({ headerLink: headerLink });
  }

  handleRegisterUser = (userData) => {
    return mestoAuth.register(userData)
      .then((res) => res)
      .catch(err => {
        console.log(err);
      });
      
  }

  handleLoginUser = (userData) => {
    return mestoAuth.authorization(userData)
      .then((res) => {
        console.log(res);
        return res.json;
      })
      .then((data) => {
        console.log(data);
        if (data.jwt) {
          this.setState({ loggedIn: true });
          localStorage.setItem("jwt", data.jwt);

        }
      })
      .catch(err => {
        console.log(err);
      });
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

  switchPage = (headerLink, headerRoute) => {
    this.setState({
      headerLink: headerLink,
      headerRoute: headerRoute,
    })
  }

  render() {
    return (
      <div className='page'>
        <div className='page__content'>
          <Header headerLink={this.state.headerLink} headerRoute={this.state.headerRoute} switchPage={this.switchPage} />
            <CurrentUserContext.Provider value={this.state.currentUser}>
              <Routes>
                <Route path='/' element={
                  <ProtectedRoute>
                    <Main onEditProfile={this.handleEditProfileClick} 
                      onAddPlace={this.handleAddPlaceClick}
                      onEditAvatar={this.handleEditAvatarClick}
                      onCardClick={this.handleCardClick}
                      cards={this.state.cards}
                      onCardLike={this.handleCardLike}
                      onCardDelete={this.handleCardDelete}
                      loggedIn={this.state.loggedIn}
                      />
                  </ProtectedRoute>
                } >
                </Route>
              <Route path="/sign-in" element={<Login name={'login'} switchPage={this.switchPage} handleLogin={this.handleLoginUser} changeHeaderLink={this.handleChangeHeaderLink} handelLogin={this.handeleLoginUser} />} />
              <Route path="/sign-up" element={<Register switchPage={this.switchPage} changeHeaderLink={this.handleChangeHeaderLink} handleRegister={ this.handleRegisterUser } />} />
              </Routes>  
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
