const small_cup = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

//

updateBigCup();
//

small_cup.forEach((cup, index) => {
	cup.addEventListener('click', () => {
		highLight(index);
	});
});

function highLight(index) {
	//
	if (index === 7 && small_cup[index].classList.contains('full')) index--;

	//
	if (
		small_cup[index].classList.contains('full') &&
		!small_cup[index].nextElementSibling.classList.contains('full')
	) {
		index--;
	}

	//
	small_cup.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
	//
	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	const total_cup = small_cup.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / total_cup) * 330}px`;
		percentage.innerText = `${(fullCups / total_cup) * 100}%`;
	}

	if (fullCups === total_cup) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
