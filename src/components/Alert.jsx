import React from 'react';

const alert = ({text, isRed}) => {
    return (
        <div className={`alert ${isRed ? 'red' : ''}`}>
            <p>{text}</p>
        </div>
    )
}

export default alert;