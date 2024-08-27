import ValidateError from '../validate-error/ValidateError';

const CalculateAge = ({ birthDate }) => {
	const isValidDate = validateDate(birthDate);

	if (!isValidDate) {
		return <ValidateError />;
	}

	const age = getAge(birthDate);
	return (
		<h2>
			Si naciste el {birthDate} tienes {age} años.
		</h2>
	);
};

const getAge = birthDate => {
	const now = new Date();
	const birth = new Date(birthDate);

	let age = now.getFullYear() - birth.getFullYear();

	const monthDifference = now.getMonth() - birth.getMonth();
	const dayDifference = now.getDate() - birth.getDate();

	const hasBirthday =
		monthDifference < 0 || (monthDifference === 0 && dayDifference < 0);

	if (hasBirthday) {
		age--;
	}

	return age;
};

const validateDate = dateString => {
	const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
	const match = dateString.match(regex);

	if (!match) return false;

	// Eliminar la primera posición del array
	match.shift();

	// Desestructurar los valores restantes
	const [dayStr, monthStr, yearStr] = match;

	const day = parseInt(dayStr, 10);
	const month = parseInt(monthStr, 10);
	const year = parseInt(yearStr, 10);

	// Verifica si el mes es válido (1-12)
	if (month < 1 || month > 12) return false;

	// Verifica el año: debe estar dentro de los últimos 100 años y no puede ser mayor que el año actual
	const currentYear = new Date().getFullYear();
	if (year < currentYear - 100 || year > currentYear) return false;

	// Verifica si el día es válido para el mes
	const daysInMonth = new Date(year, month, 0).getDate();
	return day > 0 && day <= daysInMonth;
};

export default CalculateAge;
