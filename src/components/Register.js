import Header from "./Header";
import Footer from "./Footer";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Register {

    render() {
      return (
        <div className='page'>
          <div className='page__content'>
            <Header />
              <CurrentUserContext.Provider value={this.state.currentUser}> 
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
  
  export default Register;