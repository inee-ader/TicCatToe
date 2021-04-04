import React from 'react';
import '../styles/Box.css';

const box = ({ value, chooseBox }) => {
    return (
        <div className='box' onClick={chooseBox}>
            {value}
        </div>
    );
}

export default box;
