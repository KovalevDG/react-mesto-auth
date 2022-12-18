import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {TITLE_EDIT_PROFILE, PROFILE_EDIT} from "../utils/utils.js";

function EditProfilePopup(props) {
   const currentUser = React.useContext(CurrentUserContext);
   const [values, setValues] = React.useState({name: currentUser.name, about: currentUser.about});

   React.useEffect(() => {
      setValues({ 
         name: currentUser.name || '',
         about: currentUser.about || '',
       });
   }, [currentUser, props.isOpen]);
      
   const handleChange = (evt) => {
      setValues({ ...values, [evt.target.name]: evt.target.value });
   }

   
   const handleSubmit = (evt) => {
      evt.preventDefault();
      props.onUpdateUser(values);
   }

   return (
      <PopupWithForm name={'edit-profile'} title={TITLE_EDIT_PROFILE} featuresInputForm={PROFILE_EDIT} isOpen={props.isOpen} onClose={props.onClose} currentUser={values} onChange={handleChange} onSubmit={handleSubmit} />
   );
}

export default EditProfilePopup;