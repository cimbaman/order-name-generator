    
const adjectives = ["Pure", "Pitch", "Brooding", "Mysterious", "Fierce", "Graceful"];
const colors = ["White", "Black", "Red", "Blue", "Peach", "Green"];
const animals = ["Elephant", "Hen", "Rabbit", "Lion", "Giraffe", "Panda"];

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

