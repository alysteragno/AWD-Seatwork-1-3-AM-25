let availableSeatsMovie1 = 20;
let availableSeatsMovie2 = 20;
let availableSeatsMovie3 = 20;
let availableSeatsMovie4 = 20;


function reserveSeats() {
    const selectedMovie = document.querySelector('input[name="movie"]:checked');
    const selectedSeats = parseInt(document.getElementById('seats').value);
    const availabilityMessage = document.getElementById('availability');    


    if (!selectedMovie) {
        availabilityMessage.textContent = 'Please select a movie.';
        return;
    }


    if (selectedSeats > 20) {
        availabilityMessage.textContent = 'You can only reserve up to 20 seats.';
        return;
    }


    const movie = selectedMovie.value;
    let availableSeats;


    if (movie === "Action Adventure") {
        availableSeats = availableSeatsMovie1;
    } else if (movie === "Romantic Comedy") {
        availableSeats = availableSeatsMovie2;
    } else if (movie === "Horror") {
        availableSeats = availableSeatsMovie3;
    } else if (movie === "Science fiction") {
        availableSeats = availableSeatsMovie4;
    }


    if (availableSeats >= selectedSeats) {
        availabilityMessage.textContent = `Reservation successful! You have reserved ${selectedSeats} seat(s) for "${movie}".`;


        if (movie === "Action Adventure") {
            availableSeatsMovie1 -= selectedSeats;
        } else if (movie === "Romantic Comedy") {
            availableSeatsMovie2 -= selectedSeats;
        } else if (movie === "Horror") {
            availableSeatsMovie3 -= selectedSeats;
        } else if (movie === "Science fiction") {
            availableSeatsMovie4 -= selectedSeats;
        }
    } else {
        availabilityMessage.textContent = `Not enough seats available for "${movie}". Please try again later.`;
    }
}
