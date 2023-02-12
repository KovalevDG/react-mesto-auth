const TITLE_EDIT_PROFILE = 'Редактировать профиль';
const TITLE_USER_LOGIN = 'Вход';
const TITLE_USER_SIGNUP = 'Регистрация';
const TITLE_ADD_CARD = 'Новое место';
const TITLE_EDIT_AVATAR = 'Обновить аватар';
const TITLE_DELETE_CARD = 'Вы уверены?';
const BASE_URL = 'https://auth.nomoreparties.co';

const PROFILE_EDIT = {
   inputs: [{
     inputId: 'user-name',
     inputName: 'name',
     inputPlaceholder: 'Имя',
   },
     {
       inputId: 'user-job',
       inputName: 'about',
       inputPlaceholder: 'О себе',
     }],
   submitText: 'Сохранить',
};

const USER_LOGIN = {
  inputs: [{
    inputId: 'user-name',
    inputName: 'name',
    inputPlaceholder: 'Email',
  },
    {
      inputId: 'user-password',
      inputName: 'password',
      inputPlaceholder: 'Пароль',
    }],
  submitText: 'Войти',
};

const USER_SIGNUP = {
  inputs: [{
    inputId: 'user-name',
    inputName: 'email',
    inputPlaceholder: 'Email',
    inputType: 'email',
  },
    {
      inputId: 'user-password',
      inputName: 'password',
      inputPlaceholder: 'Пароль',
    }],
  submitText: 'Зарегистрироваться',
};
 
const CARD_ADD = {
  inputs: [{
    inputId: 'card-title',
    inputName: 'name',
    inputPlaceholder: 'Название',
  },
  {
    inputId: 'card-link',
    inputName: 'link',
    inputPlaceholder: 'Ссылка на картинку',
  }],
    submitText: 'Создать',
};

const AVATAR_EDIT = {
  inputs: [{
    inputId: 'card-link',
    inputName: 'link',
    inputPlaceholder: 'Ссылка на картинку',
  }],
  submitText: 'Сохранить',
};

const CARD_DELETE = {
  inputs: [],
  submitText: 'Да',
}

export {
  TITLE_EDIT_PROFILE,
  TITLE_USER_LOGIN,
  TITLE_USER_SIGNUP,
  TITLE_ADD_CARD,
  TITLE_EDIT_AVATAR,
  TITLE_DELETE_CARD,
  BASE_URL,
  PROFILE_EDIT,
  USER_LOGIN,
  USER_SIGNUP,
  CARD_ADD,
  AVATAR_EDIT,
  CARD_DELETE
};

