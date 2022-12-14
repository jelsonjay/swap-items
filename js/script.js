'use strict';

const cardBox1 = document.querySelector('#box1');
const cardBox2 = document.querySelector('#box2');
const btn = document.querySelector('#btn');
const allCar = [...document.querySelectorAll('.car')];

//console.log(cardBox1.hasChildNodes());
//console.log(allCar);

allCar.map(item => {
	return item.addEventListener('click', e => {
		const element = e.target;
		element.classList.toggle('selected');
		// console.log(e.target);
	});
});

btn.addEventListener('click', () => {
	const itemSelected = [...document.querySelectorAll('.selected')];
	const itemNotSelected = [...document.querySelectorAll('.car:not(.selected)')];
	itemSelected.map(elem => cardBox2.appendChild(elem));
	itemNotSelected.map(elem => cardBox1.appendChild(elem));
});
