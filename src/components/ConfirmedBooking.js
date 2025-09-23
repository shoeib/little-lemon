import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <main className="confirmed-booking">
      <div className="confirmed-card">
        <h1>🎉 Reservation Confirmed!</h1>
        <p>Thank you for booking with <strong>Little Lemon</strong>.</p>
        <p>
          We’ve reserved your table and look forward to serving you a delicious
          meal.
        </p>

        {/* Placeholder for booking details (optional) */}
        <div className="booking-details">
          <p><strong>Date:</strong> Your selected date</p>
          <p><strong>Time:</strong> Your selected time</p>
          <p><strong>Guests:</strong> Number of guests</p>
          <p><strong>Occasion:</strong> Occasion</p>
        </div>

        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default ConfirmedBooking;