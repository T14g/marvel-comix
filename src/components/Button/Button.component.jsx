import React from 'react';
import './Button.styles.scss';


const Button = ({ name, onClick, show, disabled = false }) => {

    const renderHelper = () => {
        if (show) {
            if (!disabled) {
                return <button className={disabled ? 'button disabled' : 'button'} onClick={() => onClick()}>{name}</button>;
            } else {
                return <button className={disabled ? 'button disabled' : 'button'} >{name}</button>;
            }
        } else {
            return null;
        }
    }

    return renderHelper();
}

export default Button;