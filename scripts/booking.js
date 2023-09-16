


     // Retrieve form values when the user submits the form
const departureCity = document.getElementById("departure-city").value;
const destinationCity = document.getElementById("destination-city").value;
const amountPaid = document.getElementById("amount-paid").value;
const departureTime = document.getElementById("departure-time").value;
const departurePlace = document.getElementById("departure-place").value;

// Create an object to store the booking details
const bookingDetails = {
  destination: destinationCity,
  amount: amountPaid,
  time: departureTime,
  place: departurePlace,
};

// Store the booking details in sessionStorage
sessionStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
