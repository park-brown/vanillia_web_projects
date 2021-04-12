const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let tiketPrice = movieSelect.value * 1;
//
populateUI();
//save selected movie and price
function setMovieData(index, price) {
	localStorage.setItem('index', index);
	localStorage.setItem('price', price);
}

//update total and count
function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	// Copy selected seats to an array
	// Map through that array and return index
	const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

	localStorage.setItem('seatsIndex', JSON.stringify(seatsIndex));

	const num = selectedSeats.length;
	count.innerText = num;
	total.innerText = num * tiketPrice;
}

// click seat event
container.addEventListener('click', function (e) {
	if (
		e.target.classList.contains('seat') &&
		!e.target.classList.contains('occupied')
	) {
		e.target.classList.toggle('selected');
		updateSelectedCount();
	}
});
// movie select event
movieSelect.addEventListener('change', function (e) {
	tiketPrice = e.target.value * 1;
	setMovieData(e.target.selectedIndex, e.target.value * 1);
	updateSelectedCount();
});
// get data from local storage and populate UI
function populateUI() {
	const selectedSeats = JSON.parse(localStorage.getItem('seatsIndex'));
	const index = JSON.parse(localStorage.getItem('index'));
	const price = JSON.parse(localStorage.getItem('price'));

	if (selectedSeats !== null && selectedSeats.length > 0) {
		selectedSeats.forEach((value) => {
			seats[value].classList.add('selected');
		});
	}

	if (index) {
		movieSelect.selectedIndex = index;
	}
	count.innerText = selectedSeats.length;
	total.innerText = selectedSeats.length * price;
}
