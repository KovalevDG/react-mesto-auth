import React from "react";

class Input extends React.Component {
   render() {
      return (
         <>
            <input className="popup__input form__input" type="text" id={this.props.inputId} name={this.props.inputName} placeholder={this.props.inputPlaceholder} required minLength="2" maxLength="140" value={this.props.inputValue[this.props.inputName]} ref={this.props.innerRef} onChange={this.props.onChange} />
            <span className="form__input-error" id={`${this.props.inputId}-error`} ></span>
         </>
      );
   }
}

export default Input;