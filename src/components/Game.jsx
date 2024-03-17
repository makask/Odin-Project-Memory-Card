import React, { useEffect, useState } from "react";
import Card from "./Card";

function Game({ incrementScore, endCurrentRound, resetGame }){

    const[characters, setCharacters] = useState([]); 

    async function getCharacters(){
        let array = [];
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12]`);
            const data = await response.json();
            for(let i = 0; i < data.length; i++){
                let character = {
                    id: data[i].id,
                    name: data[i].name,
                    imgUrl: data[i].image,
                }
                 array.push(character);   
            }    
            const shuffledArray = shuffle(array);
            setCharacters(shuffledArray);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
       getCharacters();
    },[]);

    function shuffleCards(){
        const shuffledArray = shuffle(characters);
        const copyArray = [...shuffledArray];
        setCharacters(copyArray);
    }

    function shuffle(array){
        return array.sort(() => Math.random() - 0.5);
    }

    return(
        <div>
            <div className="game">
                { characters.map((card) => {
                    return (<Card 
                        id={card.id} 
                        key={card.id} name={card.name} 
                        imgUrl={card.imgUrl} 
                        incrementScore={incrementScore}
                        endCurrentRound={endCurrentRound}
                        resetGame={resetGame}
                        shuffleCards={shuffleCards}    
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Game;