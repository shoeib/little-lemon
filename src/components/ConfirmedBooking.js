import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  const { state } = useLocation();
  const { date, time, guests, occasion } = state || {};

  return (
    <main className="confirmed-booking">
      <div className="confirmed-card">
        <h1>🎉 Reservation Confirmed!</h1>
        <p>Thank you for booking with <strong>Little Lemon</strong>.</p>
        <p>
          We’ve reserved your table and look forward to serving you a delicious
          meal.
        </p>

        {state ? (
          <div className="booking-details">
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Guests:</strong> {guests}</p>
            <p><strong>Occasion:</strong> {occasion}</p>
          </div>
        ) : (
          <p>No booking details found.</p>
        )}

        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default ConfirmedBooking;