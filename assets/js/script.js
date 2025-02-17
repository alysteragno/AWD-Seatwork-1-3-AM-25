
let availableSeatsMovie1 = 20;
let availableSeatsMovie2 = 20;
let availableSeatsMovie3 = 20;
let availableSeatsMovie4 = 20;  

let reservedSeatsMovie1 = 0; 
let reservedSeatsMovie2 = 0;
let reservedSeatsMovie3 = 0;
let reservedSeatsMovie4 = 0;

function reserveSeats() {
    const selectedMovie = document.querySelector('input[name="movie"]:checked');
    const selectedSeats = parseInt(document.getElementById('seats').value);
    const availabilityMessage = document.getElementById('availability');    

    if (!selectedMovie) {
        availabilityMessage.textContent = 'Please select a movie.';
        return;
    }

    if (selectedSeats < 1 || selectedSeats > 20) {
        availabilityMessage.textContent = 'Please select between 1 and 20 seats.';
        return;
    }

    const movie = selectedMovie.value;
    let availableSeats;
    let reservedSeats;

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

    if (selectedSeats > availableSeats) {
        availabilityMessage.textContent = `Not enough seats available for "${movie}". Please try again later.`;
        return;
    }

    reservedSeats += selectedSeats; // Increment the reserved seats count

    availabilityMessage.textContent = `Reservation successful! You have reserved ${reservedSeats} seat(s) for "${movie}".`;

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

   
    updateReservedSeatsBackground();
}


function updateReservedSeatsBackground() {
    const allSeats = document.querySelectorAll('.seat'); 
    allSeats.forEach(seat => {
        const seatId = parseInt(seat.id.replace('seat', '')); 

    
        if (
            reservedSeatsMovie1 >= seatId ||
            reservedSeatsMovie2 >= seatId ||
            reservedSeatsMovie3 >= seatId ||
            reservedSeatsMovie4 >= seatId
        ) {
            seat.classList.add('reserved'); 
        } else {
            seat.classList.remove('reserved'); 
        }
    });
}
