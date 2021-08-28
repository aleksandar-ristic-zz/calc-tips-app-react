import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import Attribution from './components/Attribution'

function App() {

	const tipAmount = (number) => {

	}

	const totalPerPerson = (number) => {

	}

	return (
		<>
			<h1 className='headline'>
				<img src='/images/logo.svg' alt='logo' />
			</h1>

			<div className='container'>
				<UserInput tipAmount={} totalPerPerson={} />
				<UserOutput tipAmount={tipAmount()} totalPerPerson={totalPerPerson()} />
			</div>

			<Attribution />
		</>
	)
}

export default App
