import React from 'react';

class Form extends React.Component {

   render() {
      return (
         <form className="popup__form form" name={`form-${this.props.name}`} action="#" method="POST" onSubmit={this.props.onSubmit}>
            {this.props.children}
         </form>
      );
   }
}
export default Form;