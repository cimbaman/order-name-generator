import {adjectives} from "./data/adjectives.js"
import {colors} from "./data/colors.js"
import {animals} from "./data/animals.js"
import {colors as hexcolors} from "./data/hexcolors.js"

function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}
	
export function generateName() {

	const adjective = getRandomElement(adjectives);
	const color = getRandomElement(colors);
	const animal = getRandomElement(animals);

	// return `${adjective} ${color} ${animal}`;
	const randomFormat = Math.random();

	let name = "";

	// Three possible formats
	if (randomFormat < 0.5 ) {
		name = `${color} ${animal}`;
	} else if (randomFormat < 0.9 ) {
		name = `${adjective} ${animal}`;
	} else {
		name = `${adjective} ${color} ${animal}`;
	}

	return name;
}

export function showName(){
	const randomFormat = Math.random();

	const color = getRandomElement(hexcolors);

	const adjective = getRandomElement(adjectives);

	const animal = getRandomElement(animals);


	if (randomFormat < 0.5 ) {
		document.getElementById("adjective-part").textContent = " ";

		document.getElementById("color-part").textContent = color.name;
		document.body.style.color = color.hexcode;

	} else if (randomFormat < 0.9 ) {
		document.getElementById("adjective-part").textContent = adjective;

		document.getElementById("color-part").textContent = " ";
		document.body.style.color = "#f4f4f4";

	} else {
		document.getElementById("adjective-part").textContent = adjective;
    	document.getElementById("color-part").textContent = color.name;
		document.body.style.color = color.hexcode;
	}


	// document.getElementById("adjective-part").textContent = getRandomElement(adjectives);
    // document.getElementById("color-part").textContent = getRandomElement(colors);
    document.getElementById("animal-part").textContent = animal;

	document.getElementById("adjective-part").addEventListener("click", () => {
		const adjective = getRandomElement(adjectives);
		document.getElementById("adjective-part").textContent = adjective;
	});
	
	document.getElementById("color-part").addEventListener("click", () => {
		const color = getRandomElement(hexcolors);
		document.getElementById("color-part").textContent = color.name;
		document.body.style.color = color.hexcode;
	});
	
	document.getElementById("animal-part").addEventListener("click", () => {
		const animal = getRandomElement(animals);
		document.getElementById("animal-part").textContent = animal;
	});
}

export function generateNameJSON() {

	const adjective = getRandomElement(adjectives);
	const color = getRandomElement(hexcolors);
	const animal = getRandomElement(animals);

	const randomFormat = Math.random();

	let name = "";

	if (randomFormat < 0.5 ) {
		name = `${color.name} ${animal}`;
	} else if (randomFormat < 0.9 ) {
		name = `${adjective} ${animal}`;
	} else {
		name = `${adjective} ${color.name} ${animal}`;
	}

	return JSON.stringify(
		{"name" : name,
			"color": color.hexcode
		}, null, 2
	);
}