import React from 'react';
import ReactDom from 'react-dom';

const box = ({value, onClick}) => {
    return (
        <button className='box' onClick={onClick}>
            {value}
        </button>
    );
}

export default box;
