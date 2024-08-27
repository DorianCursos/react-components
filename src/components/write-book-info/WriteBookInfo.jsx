import ValidateError from '../validate-error/ValidateError';

const WriteBookInfo = ({ title, author, year, genre }) => {
	if (!title || !author || !year || !genre) {
		return <ValidateError />;
	}
	return (
		<h2>
			El libro {title} fue escrito por {author} en el año {year}. Es un libro de{' '}
			{genre}.
		</h2>
	);
};

export default WriteBookInfo;
