import ValidateError from '../validate-error/ValidateError';

const CalculatePower = ({ base, exponent }) => {
	if (!base || !exponent || isNaN(base) || isNaN(exponent)) {
		return <ValidateError />;
	}

	const result = Math.pow(base, exponent);

	return (
		<h2>
			{base}
			<sup>{exponent}</sup> = {result}
		</h2>
	);
};

export default CalculatePower;
