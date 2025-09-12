import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <section className="booking-page" id="booking">
      <div className="booking-content">
        <h1 className="booking-title">Reserve a Table</h1>
        <p className="booking-subtitle">
          Book your special evening with us. Choose a date, time, and let us know the occasion!
        </p>

        <div className="booking-card">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingPage;