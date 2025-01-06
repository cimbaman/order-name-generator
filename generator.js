import {adjectives} from "./data/adjectives.js"
import {colors} from "./data/colors.js"
import {animals} from "./data/animals.js"

function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}
	
function generateName() {

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

	if (randomFormat < 0.5 ) {
		document.getElementById("adjective-part").textContent = " ";

		document.getElementById("color-part").textContent = getRandomElement(colors);

	} else if (randomFormat < 0.9 ) {
		document.getElementById("adjective-part").textContent = getRandomElement(adjectives);

		document.getElementById("color-part").textContent = " ";

	} else {
		document.getElementById("adjective-part").textContent = getRandomElement(adjectives);
    	document.getElementById("color-part").textContent = getRandomElement(colors);
    
	}


	// document.getElementById("adjective-part").textContent = getRandomElement(adjectives);
    // document.getElementById("color-part").textContent = getRandomElement(colors);
    document.getElementById("animal-part").textContent = getRandomElement(animals);

	document.getElementById("adjective-part").addEventListener("click", () => {
		document.getElementById("adjective-part").textContent = getRandomElement(adjectives);
	});
	
	document.getElementById("color-part").addEventListener("click", () => {
		document.getElementById("color-part").textContent = getRandomElement(colors);
	});
	
	document.getElementById("animal-part").addEventListener("click", () => {
		document.getElementById("animal-part").textContent = getRandomElement(animals);
	});
}