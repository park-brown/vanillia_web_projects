const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = '0';

	const updateCounter = () => {
		const target = counter.getAttribute('data-target') * 1;

		const accu = counter.innerText * 1;

		const step = target / 200;

		if (accu < target) {
			counter.innerText = `${Math.ceil(accu + step)}`;
			setTimeout(() => {
				updateCounter();
			}, 10);
		} else {
			counter.innerText = target;
		}
	};

	updateCounter();
});
