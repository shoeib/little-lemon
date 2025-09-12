import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Book Your Table</h1>
      <p>Please fill in the form below to reserve your spot.</p>
      <BookingForm />
    </div>
  );
};

export default BookingPage;