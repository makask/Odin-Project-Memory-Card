import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Header from './components/Header'

function App() {
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [resetGame, setResetGame] = useState(true);

  function endCurrentRound(){
    if(score > highScore){
      setHighScore(score);
    }
    setScore(0);
    setResetGame(true);
  }

  function incrementScore(){
    setScore(score + 1);
    setResetGame(false);
  }

  return (
    <>
     <Header score={score} highScore={highScore} />
     <Game incrementScore={incrementScore} endCurrentRound={endCurrentRound} resetGame={resetGame} />
    </>
  )
}

export default App
