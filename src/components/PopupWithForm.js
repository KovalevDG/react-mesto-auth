import React from 'react';
import Popup from './Popup';
import Form from './Form';
import Input from './Input';
import Button from './ButtonSubmit';

function PopupWithForm(props) {
   return (
      <Popup name={props.name} title={props.title} isOpen={props.isOpen} onClose={props.onClose}>
         <Form name={props.name} onSubmit={props.onSubmit}>
            {  
               props.featuresInputForm.inputs.map((input) => {
                  return (<Input class='popup__input' key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={props.currentUser} innerRef={props.innerRef} onChange={props.onChange} />)
               })                       
            }
            <Button class='popup' submitText={props.featuresInputForm.submitText} />
         </Form>
      </Popup>
   );
}

export default PopupWithForm;