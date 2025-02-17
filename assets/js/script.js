// Initialize available seats for each movie (Maximum of 20 seats per movie)
let availableSeatsMovie1 = 20;  // Action Adventure
let availableSeatsMovie2 = 20;  // Romantic Comedy
let availableSeatsMovie3 = 20;  // Horror
let availableSeatsMovie4 = 20;  // Science Fiction

// Arrays to track reserved seats for each movie
let reservedSeatsMovie1 = [];
let reservedSeatsMovie2 = [];
let reservedSeatsMovie3 = [];
let reservedSeatsMovie4 = [];

function reserveSeats() {
    const selectedMovie = document.querySelector('input[name="movie"]:checked');
    const selectedSeats = parseInt(document.getElementById('seats').value);
    const availabilityMessage = document.getElementById('availability');    

    // Ensure a movie is selected
    if (!selectedMovie) {
        availabilityMessage.textContent = 'Please select a movie.';
        return;
    }

    // Ensure selected seats is between 1 and 20
    if (selectedSeats < 1 || selectedSeats > 20) {
        availabilityMessage.textContent = 'Please select between 1 and 20 seats.';
        return;
    }

    const movie = selectedMovie.value;
    let availableSeats;
    let reservedSeatsArray;

    // Determine which movie's seat availability we're working with
    if (movie === "Action Adventure") {
        availableSeats = availableSeatsMovie1;
        reservedSeatsArray = reservedSeatsMovie1;
    } else if (movie === "Romantic Comedy") {
        availableSeats = availableSeatsMovie2;
        reservedSeatsArray = reservedSeatsMovie2;
    } else if (movie === "Horror") {
        availableSeats = availableSeatsMovie3;
        reservedSeatsArray = reservedSeatsMovie3;
    } else if (movie === "Science fiction") {
        availableSeats = availableSeatsMovie4;
        reservedSeatsArray = reservedSeatsMovie4;
    }

    // Ensure no more than available seats can be reserved
    if (selectedSeats > availableSeats) {
        availabilityMessage.textContent = `Not enough seats available for "${movie}". Please try again later.`;
        return;
    }

    // Proceed with reserving seats and update the available seats
    availabilityMessage.textContent = `Reservation successful! You have reserved ${selectedSeats} seat(s) for "${movie}".`;

    // Reserve seats and update available seats
    reserveSeatsForMovie(reservedSeatsArray, selectedSeats);

    // Update the available seats for the specific movie
    if (movie === "Action Adventure") {
        availableSeatsMovie1 -= selectedSeats;
    } else if (movie === "Romantic Comedy") {
        availableSeatsMovie2 -= selectedSeats;
    } else if (movie === "Horror") {
        availableSeatsMovie3 -= selectedSeats;
    } else if (movie === "Science fiction") {
        availableSeatsMovie4 -= selectedSeats; // Ensure Sci-Fi is correctly handled
    }

    // Update the seat reservation status visually
    updateReservedSeatsBackground();
}

// Function to reserve seats for a specific movie
function reserveSeatsForMovie(reservedSeatsArray, numberOfSeats) {
    for (let i = 0; i < numberOfSeats; i++) {
        reservedSeatsArray.push(reservedSeatsArray.length + 1); // Increment the seat number (starts from 1)
    }
}

// Function to update the background color of reserved seats
function updateReservedSeatsBackground() {
    const allSeats = document.querySelectorAll('.seat'); // Get all seat elements
    allSeats.forEach(seat => {
        const seatId = parseInt(seat.id.replace('seat', '')); // Get the seat number from its ID

        // Check if this seat is reserved for any movie
        if (
            reservedSeatsMovie1.includes(seatId) ||
            reservedSeatsMovie2.includes(seatId) ||
            reservedSeatsMovie3.includes(seatId) ||
            reservedSeatsMovie4.includes(seatId)  // Ensure this checks for Sci-Fi reservations
        ) {
            seat.classList.add('reserved'); // Add reserved class if seat is reserved
        } else {
            seat.classList.remove('reserved'); // Ensure unreserved seats are not gray
        }
    });
}
