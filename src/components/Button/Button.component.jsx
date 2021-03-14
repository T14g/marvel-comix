import React from 'react';
import './Button.styles.scss';


const Button = ({ name, onClick, show }) => (
    show ? <button className="button" onClick={() => onClick()}>{name}</button> : null
)

export default Button;