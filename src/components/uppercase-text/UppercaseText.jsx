import ValidateError from '../validate-error/ValidateError';

const UppercaseText = ({ children }) => {
	if (!children) return <ValidateError />;

	const uppercaseText = children.toUpperCase();

	return <h2>{uppercaseText}</h2>;
};

export default UppercaseText;
