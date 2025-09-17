import { useReducer } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../api";

// Reducer for available times
function updateTimes(state, action) {
  if (action.type === "UPDATE_DATE") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

// Initialize available times (today's date)
function initializeTimes() {
  return fetchAPI(new Date());
}

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  // Handle form submission
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      alert("✅ Reservation submitted successfully!");
    } else {
      alert("❌ Failed to submit reservation.");
    }
  };

  return (
    <section className="booking-page" id="booking">
      <div className="booking-content">
        <h1 className="booking-title">Reserve a Table</h1>
        <p className="booking-subtitle">
          Book your special evening with us. Choose a date, time, and let us know the occasion!
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