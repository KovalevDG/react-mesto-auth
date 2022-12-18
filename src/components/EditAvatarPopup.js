import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {TITLE_EDIT_AVATAR, AVATAR_EDIT} from "../utils/utils.js";

function EditAvatarPopup(props) {
   const currentUser = React.useContext(CurrentUserContext);
   const [avatar, setAvatar] = React.useState({ avatar: currentUser.avatar });
   const inputRef = React.useRef();

   React.useEffect(() => {
      inputRef.current.value = '';
   }, [props.isOpen]);

   const handleSubmit = (evt) => {
      evt.preventDefault();
      props.onUpdateAvatar({
         avatar: inputRef.current.value,
      });

   }
   
   return (
      <PopupWithForm name={'edit-avatar'} title={TITLE_EDIT_AVATAR} featuresInputForm={AVATAR_EDIT} isOpen={props.isOpen} onClose={props.onClose} currentUser={avatar} innerRef={inputRef} onSubmit={handleSubmit} />
   );
}

export default EditAvatarPopup;