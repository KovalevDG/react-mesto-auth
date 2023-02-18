import React, { useState } from "react";
import ButtonSubmit from './ButtonSubmit';
import Form from './Form';
import Input from './Input';
import { USER_SIGNUP, TITLE_USER_SIGNUP} from '../utils/utils';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, useNavigate } from 'react-router-dom';
import * as mestoAuth from '../utils/mestoAuth.js';

function Register(props) {
  const navigate = useNavigate();
   const [userData, setUserData] = useState({
      "password": "",
      "email": "",
   });
   const [message, setMessage] = useState("");
 
   const handleChange = (evt) => {
     const { name, value } = evt.target;
 
     setUserData({
       ...userData,
       [name]: value,
     });
   }
 
  const onSubmit = (evt) => {
    evt.preventDefault();
    props.handleRegister(userData);
    navigate('/sign-in');  
  }

   return (
      <div className='form-login'>
        <div className='form-login__container'>
          <Form name={props.name} onSubmit={onSubmit}>
            <h3 className={`form-login__title`}>{TITLE_USER_SIGNUP}</h3>
            {
              USER_SIGNUP.inputs.map((input) => {
                  return (<Input class='form-login__input' key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={''} innerRef={props.innerRef} onChange={handleChange} />)
               })
            }
              <ButtonSubmit class='form-login' submitText={USER_SIGNUP.submitText} />
              <Link className='form-login__link-to-login' to='/sign-in'>Уже зарегистрированы? Войти</Link>
          </Form>
        </div>
      </div>
   );    
}

export default Register;