import React from 'react'
import '../App.css';
import './Main.css';
import './Card.css';
import scooter from '../assets/images/scooter.png';

const Card = ({name, price, description, image }) => {
  return (
    <section className='Card'>
        <div className='card-content'>
            <img src={image} alt={name} />
            <div className='card-content-text'>
                <div className='card-content-heading'>
                    <h6 className='card-content-heading-label'>{name}</h6>
                    <h6 className='card-content-heading-price'>{price}</h6>
                </div>
                <p>{description}</p>
                <div className='card-content-footing'>
                    <h6 className='card-content-footing-label'>Order a delivery</h6>
                    <img src={scooter} alt='scooter' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Card