const validateNumbers = numbers => {
	const areAllNumbers = numbers.every(number => typeof number === 'number');

	return areAllNumbers;
};

const validateWords = words => {
	const areAllwords = words.every(word => typeof word === 'string');

	return areAllwords;
};

export { validateNumbers, validateWords };
