import React, { useState } from 'react';

const BookingForm = ({availableTimes, updateTimes}) => {

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

   // If the date changes, trigger dispatch to update availableTimes
    if (id === 'date') {
      updateTimes(value); // pass selected date to reducer
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Later, connect to the API
  };

  return (

    <form onSubmit={handleSubmit} className="booking-form" >
      <label htmlFor="date">Choose date</label>
      <input type="date" id="date" value={formData.date} onChange={handleChange}/>

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        <option value="">--Select time--</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;