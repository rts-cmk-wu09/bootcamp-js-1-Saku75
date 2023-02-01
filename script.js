// Quotes display element
const quoteDisplay = document.getElementById("quotes");

// An array of 10 famous quotes
let quotes = [
	"The greatest glory in living lies not in never falling, but in rising every time we fall.",
	"The way to get started is to quit talking and begin doing.",
	"If life were predictable it would cease to be life, and be without flavor.",
	"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
	"Life is what happens when you're busy making other plans.",
	"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
	"When you reach the end of your rope, tie a knot in it and hang on.",
	"Always remember that you are absolutely unique. Just like everyone else.",
	"Don't judge each day by the harvest you reap but by the seeds that you plant.",
	"The future belongs to those who believe in the beauty of their dreams.",
];

// A function that shuffles an array
function shuffle(array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Shuffle the quotes array
const shuffledQuotes = shuffle(quotes);

// Display all the quotes
shuffledQuotes.forEach((element) => {
	quoteDisplay.innerHTML += `<p>${element}</p>`;
});
