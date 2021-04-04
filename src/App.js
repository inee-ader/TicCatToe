import './styles/App.css';
import {useState} from 'react';
import React from 'react';
import Box from './components/Box';

const App = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const chooseBox = (box) => {
    setBoard(board.map((value, i) => {
      if(i == box && value == '') {
        return player
      }
      return value; 
      })
    )
    if (player == 'X') {
      setPlayer('O')
    } else {
      setPlayer('X')
    }
  }

  return (
    <div className='app'>
      <div className='board'>
        <div className='board__row'>
          <Box value={board[0]} chooseBox={() => {chooseBox(0)}}/>
          <Box value={board[1]} chooseBox={() => {chooseBox(1)}}/>
          <Box value={board[2]} chooseBox={() => {chooseBox(2)}}/>
        </div>
        <div className='board__row'>
          <Box value={board[3]} chooseBox={() => {chooseBox(3)}}/>
          <Box value={board[4]} chooseBox={() => {chooseBox(4)}}/>
          <Box value={board[5]} chooseBox={() => {chooseBox(5)}}/>
        </div>
        <div className='board__row'>
          <Box value={board[6]} chooseBox={() => {chooseBox(6)}}/>
          <Box value={board[7]} chooseBox={() => {chooseBox(7)}}/>
          <Box value={board[8]} chooseBox={() => {chooseBox(8)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
