import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./components/BookingForm";

// mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();
const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </MemoryRouter>
    );
  });

  test("renders the BookingForm labels", () => {
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("calls submitForm and navigates when form is valid", () => {
    const today = new Date().toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: today },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: today,
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/confirmed", {
      state: {
        date: today,
        time: "17:00",
        guests: 2,
        occasion: "Birthday",
      },
    });
  });

  test("shows error for past date", () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2000-01-01" },
    });
    expect(
      screen.getByText(/date cannot be in the past/i)
    ).toBeInTheDocument();
  });

  test("shows error if guests less than 1", () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 0 },
    });
    expect(
      screen.getByText(/at least 1 guest is required/i)
    ).toBeInTheDocument();
  });

  test("shows error if guests more than 10", () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 11 },
    });
    expect(
      screen.getByText(/maximum 10 guests allowed/i)
    ).toBeInTheDocument();
  });
});