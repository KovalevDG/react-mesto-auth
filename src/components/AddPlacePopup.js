import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {TITLE_ADD_CARD, CARD_ADD} from "../utils/utils.js";

function AddPlacePopup(props) {
   const [values, setValues] = React.useState({ name: '', link: '' });
   
   React.useEffect(() => {
      setValues({
         name: '',
         link: '',
      })
   }, [props.isOpen]);

   const handleSubmit = (evt) => {
      evt.preventDefault();
      props.onAddPlace(values);
   }

   const handleChange = (evt) => {
      setValues({ ...values, [evt.target.name]: evt.target.value });
   }
   
   return (
      <PopupWithForm name={'add-card'} title={TITLE_ADD_CARD} featuresInputForm={CARD_ADD} isOpen={props.isOpen} onClose={props.onClose} currentUser={values} onChange={handleChange} onSubmit={handleSubmit} />
   );
}

export default AddPlacePopup; 