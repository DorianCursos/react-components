const CountWords = ({ children }) => {
	if (typeof children !== 'string') {
		return <p>Error: Datos no válidos!</p>;
	}

	const numberOfWords = children.split(' ').length;

	return (
		<h2>
			En la frase &quot;{children}&quot; hay {numberOfWords} palabras.
		</h2>
	);
};

export default CountWords;
