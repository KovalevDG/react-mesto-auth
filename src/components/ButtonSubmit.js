import React from "react";

class ButtonSubmit extends React.Component{
   render() {
      return (
         <button className="popup__submit-button form__submit-button" type="submit">{ this.props.submitText }</button>
      );
   }
}

export default ButtonSubmit;