import { useState, useEffect } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const today = new Date().toISOString().split("T")[0]; // format YYYY-MM-DD

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_DATE", date: newDate });
  };

  // Validate form fields
  useEffect(() => {
  const today = new Date().toISOString().split("T")[0]; // moved here
  const newErrors = {};

  if (!date) {
    newErrors.date = "Please choose a date.";
  } else if (date < today) {
    newErrors.date = "Date cannot be in the past.";
  }

  if (!time) {
    newErrors.time = "Please select a time.";
  }

  if (!guests || guests < 1) {
    newErrors.guests = "At least 1 guest is required.";
  } else if (guests > 10) {
    newErrors.guests = "Maximum 10 guests allowed.";
  }

  if (!occasion) {
    newErrors.occasion = "Please select an occasion.";
  }

  setErrors(newErrors);
  setIsFormValid(Object.keys(newErrors).length === 0);
}, [date, time, guests, occasion]);

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate role="form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        required
      />
      {errors.date && <span className="error">{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">-- Select a time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {errors.time && <span className="error">{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />
      {errors.guests && <span className="error">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">-- Select an occasion --</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <span className="error">{errors.occasion}</span>}

      <button type="submit" disabled={!isFormValid}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;