// components/Main.js

import React, { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../api';
import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

/*const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

};

const updateTimes = (state, date) => {
  // Later, make this dynamic
  //
   return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

};*/



const Main = () => {

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
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
  );
};
 /* const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);



  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};*/

export default Main;
