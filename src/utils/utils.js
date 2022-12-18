const TITLE_EDIT_PROFILE = 'Редактировать профиль';
const TITLE_ADD_CARD = 'Новое место';
const TITLE_EDIT_AVATAR = 'Обновить аватар';
const TITLE_DELETE_CARD = 'Вы уверены?';

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

export {TITLE_EDIT_PROFILE, TITLE_ADD_CARD, TITLE_EDIT_AVATAR, TITLE_DELETE_CARD, PROFILE_EDIT, CARD_ADD, AVATAR_EDIT, CARD_DELETE};

