import { initializeTimes, updateTimes } from "./components/BookingPage";

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same state for UPDATE action", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE", date: "2023-01-01" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns same state if action type is unknown", () => {
  const state = ["17:00"];
  const action = { type: "UNKNOWN" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});