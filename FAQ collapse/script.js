const down_icons = document.querySelectorAll('.fa-chevron-down');
const faqs = document.querySelectorAll('.faq');
const X_icons = document.querySelectorAll('.fa-times');

//
down_icons.forEach((icon, index) => {
	icon.addEventListener('click', () => {
		faqs[index].classList.add('active');
	});
});
//
X_icons.forEach((icon, index) => {
	icon.addEventListener('click', () => {
		faqs[index].classList.remove('active');
	});
});
