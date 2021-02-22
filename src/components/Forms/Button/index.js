import React, { Component } from 'react';
import './styles.scss';

const Button = ({children, ...otherprops}) => {
    return ( 
       <button  className="btn" {...otherprops}>
           {children}
       </button>
     );
    
}
 
export default Button;