import React from 'react';
import PopupWithFormAuth from './PopupWithFormAuth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Login extends React.Component {

  render() {
    return (
      <div className='page'>
        <div className='page__content'>
          <PopupWithFormAuth isOpen={this.state.isAuthPopupOpen} onClose={this.closeAllPopups} onUpdateUser={this.handleUpdateUser} />
        </div>
      </div>
    );    
  }
}

export default Login;