import ValidateError from '../validate-error/ValidateError';

const WriteGreeting = ({ name, hour }) => {
	if (!name || !hour || hour < 0 || hour > 24) {
		return <ValidateError />;
	}

	const greeting = getGreeting(hour);

	return (
		<h2>
			{greeting}, {name}
		</h2>
	);
};

const getGreeting = hour => {
	if (hour > 0 && hour < 7) {
		return 'Buenas madrugadas';
	} else if (hour >= 7 && hour <= 13) {
		return 'Buenos días';
	} else if (hour > 13 && hour < 21) {
		return 'Buenas tardes';
	}

	return 'Buenas noches';
};

export default WriteGreeting;
