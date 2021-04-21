const numbers = document.querySelectorAll('.nums span');

const counter = document.querySelector('.counter');

const final = document.querySelector('.final');

const replay = document.getElementById('replay');

runAnimation();
console.log(replay);
function runAnimation() {
	numbers.forEach((num, index) => {
		const nextToLast = num.length - 1;
		num.addEventListener('animationend', (e) => {
			if (e.animationName === 'goin' && index !== nextToLast) {
				num.classList.remove('in');
				num.classList.add('out');
			} else if (e.animationName === 'goOut' && num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				final.classList.add('show');
			}
		});
	});
}

function resetDom() {
	counter.classList.remove('hide');
	final.classList.remove('show');
	numbers.forEach((num) => {
		num.classList.value = '';
	});
	numbers[0].classList.add('in');
}
replay.addEventListener('click', function () {
	resetDom();
	runAnimation();
});
