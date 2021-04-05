import './styles/Box.css';
import React, { Component } from 'react';

class Box extends Component {

    render() {
        return (
            <div className='box' onClick={this.props.chooseBox}>
            {this.props.value}
        </div>
        );
    }
}

export default Box;
