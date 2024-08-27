const Flag = ({ country, image, people }) => {
	return (
		<div>
			<h2>{country}</h2>
			<img
				src={`/assets/images/${image}`}
				alt={`Bandera de ${country}`}
				width='300'
			/>
			<p>{people}M. Habitantes</p>
		</div>
	);
};

export default Flag;
