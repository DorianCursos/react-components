import ValidateError from '../validate-error/ValidateError';

const DisplayPersonInfo = ({ name, age, job }) => {
	if (!name || !age || !job) return <ValidateError />;
	return (
		<h2>
			{name} tiene {age} años y es {job}.
		</h2>
	);
};

export default DisplayPersonInfo;
