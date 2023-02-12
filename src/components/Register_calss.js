import React from 'react';
import ButtonSubmit from './ButtonSubmit';
import Form from './Form';
import Input from './Input';
import { USER_SIGNUP, TITLE_USER_SIGNUP} from '../utils/utils';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.props.changeHeaderLink('Войти', 'sign-up');
  }

  render() {
    return (
      <div className='form-login'>
        <div className='form-login__container'>
          <Form name={this.props.name} onSubmit={this.props.onSubmit}>
            <h3 className={`form-login__title`}>{TITLE_USER_SIGNUP}</h3>
            {
              USER_SIGNUP.inputs.map((input) => {
                  return (<Input class='form-login__input' key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={''} innerRef={this.props.innerRef} onChange={this.props.onChange} />)
               })
            }
              <ButtonSubmit class='form-login' submitText={USER_SIGNUP.submitText} />
              <Link className='form-login__link-to-login' to='/sign-in'>Уже зарегистрированы? Войти</Link>
          </Form>
        </div>
      </div>
      );    
    }
  }
  
  export default Register;