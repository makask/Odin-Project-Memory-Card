import React, { useEffect, useState } from "react";

function Card({ imgUrl, name, incrementScore, endCurrentRound, resetGame, shuffleCards}){

  const[isClicked, setIsClicked] = useState(false);

  function handleClick(){
    setIsClicked(true);
    if(isClicked){
      endCurrentRound();
    }else{
      incrementScore();
    }
    shuffleCards();
  }

  useEffect(()=>{
    if(resetGame){
      setIsClicked(false);
    }
  }, [resetGame]);

    return(
        <div className="card" onClick={handleClick}>
          <div className="card-img">
            <img src={imgUrl}/>
          </div>
          <div className="card-name">
            <p>{name}</p>
          </div>
        </div>
    );
}

export default Card;