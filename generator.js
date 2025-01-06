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

	return `${adjective} ${color} ${animal}`;
}

