import React from 'react';
import AuthPopup from './AuthPopup';
import Form from './Form';
import Input from './Input';
import { USER_LOGIN, TITLE_USER_LOGIN } from '../utils/utils'; 
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Login extends React.Component {




  render() {
    return (
      <div className='form-login'>
        <div className='form-login__container'>
          <Form name={this.props.name} onSubmit={this.props.onSubmit}>
            <h3 className={`form-login__title`}>{TITLE_USER_LOGIN}</h3>
            {
              USER_LOGIN.inputs.map((input) => {
                  return (<Input key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={''} innerRef={this.props.innerRef} onChange={this.props.onChange} />)
               })
            }  
          </Form>
          {/* <AuthPopup isOpen={this.props.isOpen} onClose={this.closeAllPopups} onUpdateUser={this.handleUpdateUser} /> */}
        </div>
      </div>
    );    
  }
}

export default Login;