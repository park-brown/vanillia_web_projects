const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};
	const response = await fetch(' https://icanhazdadjoke.com', config);
	const { joke } = await response.json();
	jokeEl.innerHTML = joke;
}

jokeBtn.addEventListener('click', () => {
	generateJoke();
});
