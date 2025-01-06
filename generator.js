import {adjectives} from "./data/adjectives.js"
import {colors} from "./data/colors.js"
import {animals} from "./data/animals.js"

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

