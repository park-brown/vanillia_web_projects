const button = document.getElementById('button');
const toast = document.getElementById('toast');

const message = ['message one', 'message two', 'message three', 'message four'];

button.addEventListener('click', createNotification);

function createNotification() {
	const snackbar = document.createElement('div');
	snackbar.classList.add('toast');
	snackbar.innerText = setRandomMessage();
	toast.appendChild(snackbar);
	setTimeout(() => {
		snackbar.remove();
	}, 3000);
}

function setRandomMessage() {
	return message[Math.floor(Math.random() * message.length)];
}
