import { validateNumbers } from '../../utils/validateData';
import ValidateError from '../validate-error/ValidateError';

const CalculateAverage = ({ numbers }) => {
	const areAllNumbers = validateNumbers(numbers);

	if (!areAllNumbers) {
		return <ValidateError />;
	}

	const average = getAverage(numbers);
	return (
		<h2>
			La media de los números {numbers.join(', ')} es {average}
		</h2>
	);
};

const getAverage = numbers => {
	const totalSum = numbers.reduce((sum, number) => sum + number);

	const average = totalSum / numbers.length;

	return average;
};

export default CalculateAverage;
