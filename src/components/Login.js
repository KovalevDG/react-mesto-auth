import React from 'react';
import { useState } from "react";
import AuthPopup from './AuthPopup';
import Form from './Form';
import Input from './Input';
import { USER_LOGIN, TITLE_USER_LOGIN } from '../utils/utils'; 
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, useNavigate } from 'react-router-dom';
import ButtonSubmit from './ButtonSubmit';
import * as mestoAuth from '../utils/mestoAuth.js';

function Login(props) {

  //props.changeHeaderLink('Регистрация', 'sign-in');
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

  const handleLogin = (userData) => {
    mestoAuth.authorization(userData)
      .then((data) => {
        if (data.jwt) {
          console.log(data.jwt);
          this.setState({ loggedIn: true });
          localStorage.setItem("jwt", data.jwt);
          setUserData({ password: '', email: '' });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

 const onSubmit = (evt) => {
   evt.preventDefault();
   console.log(userData);
   handleLogin(userData);
   navigate('/');  
 }

    return (
      <div className='form-login'>
        <div className='form-login__container'>
          <Form name={props.name} onSubmit={onSubmit}>
            <h3 className={`form-login__title`}>{TITLE_USER_LOGIN}</h3>
            {
              USER_LOGIN.inputs.map((input) => {
                  return (<Input class='form-login__input' key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={''} innerRef={props.innerRef} onChange={handleChange} />)
              })
            }
            <ButtonSubmit class='form-login' submitText={USER_LOGIN.submitText} />
          </Form>
        </div>
      </div>
    );    
  }

export default Login;