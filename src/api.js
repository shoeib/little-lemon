// api.js

// A seeded random number generator
function seededRandom(seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}

// Fetch available booking times for a given date
export function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) { // 5 PM - 11 PM
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

// Submit booking form data
export function submitAPI(formData) {
  // In reality this would POST to a server
  console.log("Submitted form data:", formData);
  return true; // Always succeeds
}