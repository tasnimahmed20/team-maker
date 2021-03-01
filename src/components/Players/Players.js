import React, { useEffect, useState } from 'react';
import data from '../../fakeData/playerData.json'
import Cart from '../Cart/Cart';
import PlayerCard from '../PlayerCard/PlayerCard';
import './Players.css'

const Players = () => {
   
    const [players,setPlayers]=useState([]);
    const [playerCount,setPlayerCount]=useState([]);
    useEffect(()=>{
       setPlayers(data);
    },[]);
    const addPlayers=(player)=>{
        const newPlayerCount=[...playerCount,player];
        setPlayerCount(newPlayerCount);
    }
    return (
        <div className="player-container container-fluid">
           <div className="cards">
               {players.map(player=><PlayerCard player={player} addPlayers={addPlayers} key={player.id}></PlayerCard>)}
           </div>
           <div className="addPlayer">
                <Cart playerDetails={playerCount}></Cart>
           </div>
        </div>
    );
};

export default Players;