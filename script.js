let selectedMovie = '';
let selectedTime = '';
const pricePerTicket = 150;

function bookMovie(movie, time) {
  selectedMovie = movie;
  selectedTime = time;

  document.getElementById('selectedMovie').innerText = `Booking: ${movie} at ${time}`;
  document.getElementById('bookingForm').style.display = 'block';
  document.getElementById('billSection').style.display = 'none';
}

function generateBill() {
  const tickets = parseInt(document.getElementById('tickets').value);

  if (isNaN(tickets) || tickets < 1) {
    alert('Please enter a valid number of tickets');
    return;
  }

  const total = tickets * pricePerTicket;

  document.getElementById('movieName').innerText = `Movie: ${selectedMovie}`;
  document.getElementById('showTime').innerText = `Showtime: ${selectedTime}`;
  document.getElementById('ticketCount').innerText = `Tickets: ${tickets}`;
  document.getElementById('ticketPrice').innerText = `Price per ticket: ₹${pricePerTicket}`;
  document.getElementById('totalAmount').innerText = `Total: ₹${total}`;

  document.getElementById('billSection').style.display = 'block';
}
