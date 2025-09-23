import { useReducer } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";


// Reducer for available times
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return fetchAPI(new Date(action.date)); // must pass a Date object
    default:
      return state;
  }
}

// Initialize available times (today's date)
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Handle form submission
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed"); // ✅ redirect on success
    } else {
      alert("❌ Failed to submit reservation.");
    }
  };

  return (
    <section className="booking-page" id="booking">
      <div className="booking-content">
        <h1 className="booking-title">Reserve a Table</h1>
        <p className="booking-subtitle">
          Book now. Choose a date, time, and let us know the occasion!
        </p>

        <div className="booking-card">
          <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
        </div>
      </div>
    </section>
  );
};

export default BookingPage;