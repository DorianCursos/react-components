import ValidateError from '../validate-error/ValidateError';

const IsEvenOrOdd = ({ number }) => {
	if (!number || typeof number !== 'number') {
		return <ValidateError />;
	}

	const isEven = number % 2 === 0;

	return (
		<h2>
			{number} es {isEven ? 'par' : 'impar'}.
		</h2>
	);
};

export default IsEvenOrOdd;
