// Initialize available seats for each movie (Maximum of 20 seats per movie)
let availableSeatsMovie1 = 20;  // Action Adventure
let availableSeatsMovie2 = 20;  // Romantic Comedy
let availableSeatsMovie3 = 20;  // Horror
let availableSeatsMovie4 = 20;  // Science Fiction

// Arrays to track reserved seats for each movie
let reservedSeatsMovie1 = 0; // Number of reserved seats
let reservedSeatsMovie2 = 0;
let reservedSeatsMovie3 = 0;
let reservedSeatsMovie4 = 0;

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
    let reservedSeats;

    // Determine which movie's seat availability we're working with
    if (movie === "Action Adventure") {
        availableSeats = availableSeatsMovie1;
        reservedSeats = reservedSeatsMovie1;
    } else if (movie === "Romantic Comedy") {
        availableSeats = availableSeatsMovie2;
        reservedSeats = reservedSeatsMovie2;
    } else if (movie === "Horror") {
        availableSeats = availableSeatsMovie3;
        reservedSeats = reservedSeatsMovie3;
    } else if (movie === "Science fiction") {
        availableSeats = availableSeatsMovie4;
        reservedSeats = reservedSeatsMovie4;
    }

    // Ensure no more than available seats can be reserved
    if (selectedSeats > availableSeats) {
        availabilityMessage.textContent = `Not enough seats available for "${movie}". Please try again later.`;
        return;
    }

    // Proceed with reserving seats and update the available seats
    reservedSeats += selectedSeats; // Increment the reserved seats count

    availabilityMessage.textContent = `Reservation successful! You have reserved ${reservedSeats} seat(s) for "${movie}".`;

    // Update the available seats for the specific movie
    if (movie === "Action Adventure") {
        availableSeatsMovie1 -= selectedSeats;
        reservedSeatsMovie1 = reservedSeats;
    } else if (movie === "Romantic Comedy") {
        availableSeatsMovie2 -= selectedSeats;
        reservedSeatsMovie2 = reservedSeats;
    } else if (movie === "Horror") {
        availableSeatsMovie3 -= selectedSeats;
        reservedSeatsMovie3 = reservedSeats;
    } else if (movie === "Science fiction") {
        availableSeatsMovie4 -= selectedSeats;
        reservedSeatsMovie4 = reservedSeats;
    }

    // Update the seat reservation status visually
    updateReservedSeatsBackground();
}

// Function to update the background color of reserved seats
function updateReservedSeatsBackground() {
    const allSeats = document.querySelectorAll('.seat'); // Get all seat elements
    allSeats.forEach(seat => {
        const seatId = parseInt(seat.id.replace('seat', '')); // Get the seat number from its ID

        // Check if this seat is reserved for any movie
        if (
            reservedSeatsMovie1 >= seatId ||
            reservedSeatsMovie2 >= seatId ||
            reservedSeatsMovie3 >= seatId ||
            reservedSeatsMovie4 >= seatId
        ) {
            seat.classList.add('reserved'); // Add reserved class if seat is reserved
        } else {
            seat.classList.remove('reserved'); // Ensure unreserved seats are not gray
        }
    });
}
