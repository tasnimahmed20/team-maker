import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart= props.playerDetails;
    const total = cart.reduce((acc, current) => acc + current.salary, 0);
   
    return (
        <div>
            <h3>Added Members: {props.playerDetails.length}</h3>
            <h5 className="mb-5">Total Budget: ${total}</h5>
           { cart.map( crt => 
               <div key={crt.id} className="d-flex justify-content-between align-items-center shadow-lg text-white my-3">
                   <img className="addPlayerImg" src={crt.img} alt="crt.name"/>
                   <li className="playerDetail">Name: {crt.name}</li>
                   <li className="playerDetail">Salary: ${crt.salary} </li>
               </div>
            ) }   
        </div>
    );
};

export default Cart;