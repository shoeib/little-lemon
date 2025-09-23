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



//Form validation tests

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

test("calls submitForm with form data when valid form is submitted", () => {
  const today = new Date().toISOString().split("T")[0];

  // Fill out the form with valid values
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

  // Submit the form
  const form = screen.getByRole("form");
  fireEvent.submit(form);

  // Check that submitForm was called with correct data
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: today,
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });
});

  // =========================
  // HTML5 Validation Tests
  // =========================
  test("date input has required attribute and min set", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
  });

  test("time select has required attribute", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input has required, min, and max attributes", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });

  // =========================
  // JavaScript Validation Tests
  // =========================
  test("shows error for past date", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2000-01-01" } });
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
  });

  test("shows error if time not selected", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: "" } });
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
  });

  test("shows error if guests less than 1 or greater than 10", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: 0 } });
    expect(screen.getByText(/at least 1 guest/i)).toBeInTheDocument();

    fireEvent.change(guestsInput, { target: { value: 11 } });
    expect(screen.getByText(/maximum 10 guests/i)).toBeInTheDocument();
  });

  test("shows error if occasion not selected", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "" } });
    expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
  });

  test("form is valid when all fields are correct", () => {
    const today = new Date().toISOString().split("T")[0];
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).not.toBeDisabled();
  });
});