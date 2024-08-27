import CalculateAge from './components/calculate-age/CalculateAge';
import CalculateAverage from './components/calculate-average/CalculateAverage';
import CalculatePower from './components/calculate-power/CalculatePower';
import ConvertMinutesToHours from './components/convert-minutes-to-hours/ConvertMinutesToHours';
import CountWords from './components/count-words/CountWords';
import DisplayPersonInfo from './components/display-person-info/DisplayPersonInfo';
import FindLongestString from './components/find-longest-string/FindLongestString';
import FindMaximum from './components/find-maximum/FindMaximum';
import GenerateFullName from './components/generate-full-name/GenerateFullName';
import IsEvenOrOdd from './components/is-even-or-odd/IsEvenOrOdd';
import ReverseString from './components/reverse-string/ReverseString';
import UppercaseText from './components/uppercase-text/UppercaseText';
import WriteBookInfo from './components/write-book-info/WriteBookInfo';
import WriteGreeting from './components/write-greeting/WriteGreeting';

const personInfo = {
	name: 'Dorian',
	age: '35',
	job: 'Profesor'
};

const App = () => {
	return (
		<>
			<h1>Ejercicios Componentes</h1>
			<DisplayPersonInfo {...personInfo} />

			<GenerateFullName name='Dorian' surname='Desings' />
			<WriteBookInfo
				title='Libro 1'
				author='Dorian'
				year='2024'
				genre='tutorial'
			/>

			<ConvertMinutesToHours minutes={140} />
			<ReverseString sentence='Curso de React desde 0' />
			<IsEvenOrOdd number={2} />
			<UppercaseText>123</UppercaseText>
			<WriteGreeting name='Dorian' hour={23} />
			<CalculatePower base={2} exponent={8} />
			<CountWords>Curso de React desde 0</CountWords>
			<CalculateAge birthDate='04/10/2000' />
			<FindMaximum numbers={[1, 20, 3, 4, 5]} />
			<CalculateAverage numbers={[1, 2, 3, 4, 5]} />
			<FindLongestString words={['Hola', 'Adios', 'Pantalla']} />
		</>
	);
};

export default App;
