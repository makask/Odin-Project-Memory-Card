import React from "react";

function Header({ score, highScore }){

    return(
        <div className="header">
            <div className="header-title">
                <h1>RICK AND MORTY MEMORY GAME</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className="header-score">
                <p>Score: {score}</p>
                <p>HighScore: {highScore}</p>    
            </div>
        </div>
    );
}

export default Header;