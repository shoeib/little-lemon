//If react-router-dom errors, downgrade react-router-dom to version 6
// src/components/BookingPage.test.js
import { initializeTimes, updateTimes } from "./components/BookingPage";
import * as api from "./api"; // adjust path if needed

jest.mock("./api");

describe("BookingPage reducer functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes calls fetchAPI with today's date", () => {
    const mockTimes = ["17:00", "18:00"];
    api.fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(api.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes returns available times for the given date", () => {
    const mockTimes = ["19:00", "20:00"];
    api.fetchAPI.mockReturnValue(mockTimes);

    const fakeDate = new Date("2025-09-22");
    const result = updateTimes([], { type: "UPDATE_DATE", date: fakeDate });

    expect(api.fetchAPI).toHaveBeenCalledWith(fakeDate);
    expect(result).toEqual(mockTimes);
  });
});