import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Register extends React.Component {

    render() {
      return (
        <div className='page'>
          <div className='page__content'>
            <h2>Register</h2>
          </div>
        </div>
      );    
    }
  }
  
  export default Register;