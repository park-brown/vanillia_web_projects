const images = document.querySelectorAll('.content');

const list_items = document.querySelectorAll('li');

let index = 0;

list_items.forEach((item, idx) =>
	item.addEventListener('click', () => {
		list_items[index].classList.remove('active');
		images[index].classList.remove('show');
		index = idx;
		item.classList.add('active');
		images[index].classList.add('show');
	}),
);
