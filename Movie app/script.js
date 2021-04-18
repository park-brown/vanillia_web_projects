const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=de8180748b6bae61b290a8a096f9c922&page=1';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

const Search_URL =
	'https://api.themoviedb.org/3/search/movie?api_key=de8180748b6bae61b290a8a096f9c922&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
//Get movies
getMovies(API_URL);
async function getMovies(url) {
	const res = await fetch(url);
	const { results } = await res.json();

	showMovies(results);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== '') {
		getMovies(Search_URL + searchTerm);
		search.value = '';
	} else {
		window.location.reload();
	}
});

function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
   
      <div class="image">
        <img src="${IMAGE_PATH + poster_path}" alt="${title}">
      </div>
    
      <div class="movie-infro">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
       </div>
      <div class="overview">
         <h3>overview</h3>
         <p>${overview}</p>
       </div>
     `;

		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}
