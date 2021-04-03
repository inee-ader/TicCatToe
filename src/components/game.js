import React, { useState } from 'react';
import Box from './components/box'
import React from 'react';

const game = () => {
    return (
        <div className='container'>
            <div className='game'>
                <div className='game-board'>
                    <div className='game-board-row'>
                        <Box value={0} onClick={null}/>
                        <Box value={1} onClick={null}/>
                        <Box value={2} onClick={null}/>
                    </div>
                    <div className='game-board-row'>
                        <Box value={3} onClick={null}/>
                        <Box value={4} onClick={null}/>
                        <Box value={5} onClick={null}/>
                    </div>
                    <div className='game-board-row'>
                        <Box value={6} onClick={null}/>
                        <Box value={7} onClick={null}/>
                        <Box value={8} onClick={null}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default game;

