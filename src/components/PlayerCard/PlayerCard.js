import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerCard.css';

const PlayerCard = (props) => {
    const {name,email,country,salary,img}=props.player;
    const [btnDisable,setDisable]=useState(false);
    return (
        <div className='card-container'>
            <div className='cover-image'>
            <button  className={btnDisable ? "add-button disabled ":"add-button"} onClick={()=>{
                props.addPlayers(props.player);
                setDisable(true);
                }}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className='profile-image'>
                <img src={img} alt={name}/>
            </div>
            <div className="info">
                    <h5>{name}</h5>
                    <h6>{email}</h6>
            </div>
            <div className="insights">
                <div className="insights-item">
                    <h6>${salary}<span id="month">/month</span></h6>
                    <p>Salary</p>
                </div>
                <div className="insights-item">
                    <h6>{country}</h6>
                    <p>Country</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;