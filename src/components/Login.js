import React from 'react';
import AuthPopup from './AuthPopup';
import Form from './Form';
import Input from './Input';
import { USER_LOGIN, TITLE_USER_LOGIN } from '../utils/utils'; 
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ButtonSubmit from './ButtonSubmit';

class Login extends React.Component {




  render() {
    return (
      <div className='form-login'>
        <div className='form-login__container'>
          <Form name={this.props.name} onSubmit={this.props.onSubmit}>
            <h3 className={`form-login__title`}>{TITLE_USER_LOGIN}</h3>
            {
              USER_LOGIN.inputs.map((input) => {
                  return (<Input class='form-login__input' key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={''} innerRef={this.props.innerRef} onChange={this.props.onChange} />)
               })
            }
            <ButtonSubmit class='form-login' submitText={USER_LOGIN.submitText} />
          </Form>
        </div>
      </div>
    );    
  }
}

export default Login;