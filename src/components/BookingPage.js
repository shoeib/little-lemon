import { useReducer } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

// Reducer initializer: get today's available times
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today); // fetchAPI comes from the <script> tag
}

// Reducer updater: update times when date changes
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}


const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <section className="booking-page" id="booking">
      <div className="booking-content">
        <h1 className="booking-title">Reserve a Table</h1>
        <p className="booking-subtitle">
          Book your special evening with us. Choose a date, time, and let us know the occasion!
        </p>

        <div className="booking-card">
          <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;