import React from 'react';
import './CloseButton.styles.scss';


const CloseButton = ({ onClick }) => (
    <button className="closeButton" onClick={onClick}>X</button>
)

export default CloseButton;