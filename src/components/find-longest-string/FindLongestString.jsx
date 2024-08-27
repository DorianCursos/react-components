import { validateWords } from '../../utils/validateData';
import ValidateError from '../validate-error/ValidateError';

const FindLongestString = ({ words }) => {
	const longestWord = getLongestWord(words);
	const areAllWords = validateWords(words);

	if (!areAllWords) return <ValidateError />;

	return (
		<h2>
			De las palabras {words.join(', ')}. {longestWord} es la más larga.
		</h2>
	);
};

const getLongestWord = words => {
	// let longestWord = '';

	// for (const word of words) {
	// 	if (word.length > longestWord.length) {
	// 		longestWord = word;
	// 	}
	// }

	const longestWord = words.reduce((finalWord, word) => {
		return word.length > finalWord.length ? word : finalWord;
	});

	return longestWord;
};

export default FindLongestString;
