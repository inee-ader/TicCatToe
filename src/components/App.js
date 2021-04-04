import '../styles/App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Box from './Box';
import {Winning} from './Winning';
import { Howl, Howler } from 'howler';
import meow1 from '../audio/meow1.mp3';
import meow2 from '../audio/meow2.mp3';
import purring from '../audio/purring.mp3';
import kitten from '../styles/kitten.jpg';

const cat1 = [{sound: meow1}];
const cat2 = [{sound: meow2}];
const cat3 = [{sound: purring}];

const App = () => {

  const soundPlay = (src) => {
    const sound = new Howl({
        src
    })
    sound.play()
  }

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({winner: 'none', state: 'none'})

  useEffect(() => {
    checkTie();
    checkWin();

    if (player == 'X') {
      setPlayer('O')
    } else {
      setPlayer('X')
    }

  }, [board]);

  useEffect(() => {
    if(result.state != 'none'){
      alert(`Game finished! Winning player: ${result.winner}`)
      restartGame();
    }
  }, [result]);

  const chooseBox = (box) => {
    setBoard(board.map((value, i) => {
      if(i == box && value == '') {
        return player
      }
      return value; 
      })
    )
    if(player == 'X'){
      return cat1.map((soundObj, i) => {
        soundPlay(soundObj.sound)
      })
    } else {
      return cat2.map((soundObj, i) => {
        soundPlay(soundObj.sound)
      })
    }
  }

const checkWin = () => {
  Winning.forEach((currentPattern) => {
    const firstPlayer = board[currentPattern[0]];
    if (firstPlayer == '') return;
    let foundWinningPattern = true;
    currentPattern.forEach((i) => {
      if (board[i] != firstPlayer) {
        foundWinningPattern = false
      }
    })
    if (foundWinningPattern) {
      setResult({winner: player, state: "won"})
      return cat3.map((soundObj, i) => {
        soundPlay(soundObj.sound)
      })
    }
  });
}

const checkTie = () => {
  let filled = true; 
  board.forEach((box) => {
    if (box == '') {
      filled = false
    }
  })
  if(filled) {
    setResult({winner: 'No one--Tied!', state: 'Tie!'})
  }
}

const restartGame = () => {
  setBoard(['', '', '', '', '', '', '', '', ''])
  setPlayer('O')
}

  return (
    <div className='app'>
      <div className='app__heading'>
        <img className='app__kitten' src={kitten} alt='kitten'></img>
        <h1 className='app__h'> TIC - CAT - TOE </h1> 
      </div>
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
