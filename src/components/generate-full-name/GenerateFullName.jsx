import ValidateError from '../validate-error/ValidateError';

const GenerateFullName = ({ name, surname }) => {
	if (!name || !surname) return <ValidateError />;

	return (
		<h2>
			Hola, {name} {surname}
		</h2>
	);
};

export default GenerateFullName;
