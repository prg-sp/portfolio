// burger toggle
let burger = document.getElementById('burger');
let navigation = document.getElementById('navigation');
// after click navlist, navbar disappears
let navLinks = document.querySelectorAll('.nav__link');
// scroll up
let scrollUp = document.querySelector('#arrow-up');
//devlop day start and today date
let today = new Date();
let setDate = document.getElementById('set-date');

function init() {
	//{{{
	console.log(today.toLocaleDateString());
	setDdate();
	addListeners();
} //}}}

function addListeners() {
	//{{{
	burger.addEventListener('click', () => {
		// navigation.classList.toggle('remove-element');
		navigation.classList.toggle('translate-up');
		console.log('it was clicked');
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			// navigation.classList.add('remove-element');
			navigation.classList.remove('translate-up');
		});
	});

	scrollUp.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	});
} //}}}

function setDdate() {
	//{{{
	let devStart = 2021;
	let thisYear = today.getFullYear();
	let devFromTo =
		today.getFullYear() == devStart ? devStart : devStart + ' - ' + thisYear;

	setDate.innerHTML = '&copy ' + devFromTo;
} //}}}

document.addEventListener('DOMContentLoaded', init);
