// components/Main.js

import React, { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../api';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import Card from './Card';
import App from '../App';
import '../App.css';
import './Main.css';
import bruchetta from '../assets/images/bruchetta.svg';


/*const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

};

const updateTimes = (state, date) => {
  // Later, make this dynamic
  //
   return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

};*/



const Main = () => {

  const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: require('../assets/images/greek salad.jpg'),
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta,
  },
  {
    name: "Lemon Dessert",
    price: "$12.99",
    description: "This comes straight from grandma’s recipe book, every last ingredient has een sourced and is as authentic as can be imagined.",
    image: require('../assets/images/lemon dessert.jpg'),
  }
];

   const [availableTimes, setAvailableTimes] = useState([]);

  // Load initial times on mount
  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today); // assumed to be synchronous
    setAvailableTimes(times);
  }, []);

  // Update times based on selected date
  const updateTimes = (selectedDate) => {
    const times = fetchAPI(new Date(selectedDate));
    setAvailableTimes(times);
  };

  return (
    <section className='Main'>
      <div className='specials'>
        <div className='specials-header'>
          <h2>This week's specials!</h2>
          <Link className='primary-button main-primary-button'>
            Online Menu
          </Link>
        </div>
        <div className='specials-cards'>
          {specials.map((special, index) => (
            <Card
            key={index}
            name={special.name}
            price={special.price}
            description={special.description}
            image={special.image} />
          ))}
      </div>
    </div>
      <Routes>
        <Route className='booking-form'
          path="/bookings"
          element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      } />
      </Routes>
    </section>

  );
};

export default Main;
