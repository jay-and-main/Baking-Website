import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';

function Card(props){
    return (
        <div className="card">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className='card-price'>
                <p>₹ {props.price}</p>
            </div>
        </div>
    )
}

export default Card;