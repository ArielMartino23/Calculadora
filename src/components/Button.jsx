import React from 'react';
import '../styles-sheet/Button.css'


function Button(props){
  
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '='); 
  }

  return(
      <div
        className={`container-button ${isOperator(props.children) ? 'operator' : null}`}
        onClick={() => props.manageClick(props.children)}>
        {props.children}
      </div>
    );
}

export default Button;