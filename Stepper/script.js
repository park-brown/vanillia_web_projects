const progress = document.getElementById('progress');
const pre = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let current_active = 1;

next.addEventListener('click', () => {
	if (current_active >= circles.length) {
		current_active = circles.length;
	} else {
		current_active++;
	}
	update();
});

pre.addEventListener('click', () => {
	if (current_active < 1) {
		current_active = 1;
	} else {
		current_active--;
	}

	update();
});

function update() {
	circles.forEach((circle, index) => {
		if (index < current_active) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	const active = document.querySelectorAll('.active');
	progress.style.width =
		((active.length - 1) / (circles.length - 1)) * 100 + '%';

	if (current_active === 1) {
		pre.disabled = true;
	} else if (current_active === circles.length) {
		next.disabled = true;
	} else {
		pre.disabled = false;
		next.disabled = false;
	}
}
