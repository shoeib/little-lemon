// src/components/BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders the BookingForm labels", () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);

  // check some static labels
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test("submits form with correct data", () => {
  const mockSubmit = jest.fn();
  render(<BookingForm availableTimes={["18:00", "19:00"]} dispatch={jest.fn()} submitForm={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-09-21" } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Anniversary" } });

  fireEvent.click(screen.getByRole("button", { name: /Make Your Reservation/i }));

  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2025-09-21",
    time: "18:00",
    guests: "4", // comes in as string
    occasion: "Anniversary",
  });
});