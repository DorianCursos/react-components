const DoubleNumber = ({ number }) => {
	const double = getDoubleNumber(number);

	return (
		<h2>
			El doble del número {number} es {double}
		</h2>
	);
};

const getDoubleNumber = number => {
	return number * 2;
};

export default DoubleNumber;
