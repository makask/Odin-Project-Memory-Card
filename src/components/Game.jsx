import React, { useEffect, useState } from "react";

//https://rickandmortyapi.com/documentation/#get-multiple-characters
//https://rickandmortyapi.com/api/character/1,2,3,4,5 [1,2,3...]
function Game(){

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
                    imgUrl: data[i].image
                }
                 array.push(character);   
            }
            setCharacters(array);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
       getCharacters();
    },[]);

    return(
        <div>

        </div>
    );
}

export default Game;