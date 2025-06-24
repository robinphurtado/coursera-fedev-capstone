// components/Main.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const updateTimes = (state, date) => {
  // Later, make this dynamic
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Main;
