import ValidateError from '../validate-error/ValidateError';

const ReverseString = ({ sentence }) => {
	if (!sentence || typeof sentence !== 'string') {
		return <ValidateError />;
	}

	const reverseSentence = sentence.split('').reverse().join('');

	return <h2>{reverseSentence}</h2>;
};

// const reverseString = sentence => {
// 	const newSentence = sentence.split('').reverse().join('');
// 	// const newSentence = sentence.split('').reduce((acc, letter) => {
// 	// 	return letter + acc;
// 	// });

// 	// for (let i = sentence.length - 1; i >= 0; i--) {
// 	// 	newSentence += sentence[i];
// 	// }

// 	return newSentence;
// };

export default ReverseString;
