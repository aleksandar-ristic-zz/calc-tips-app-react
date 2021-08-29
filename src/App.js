import { useState } from 'react'

import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import Attribution from './components/Attribution'

function App() {
	const [inputTotal, setInputTotal] = useState('')
	const [inputCustom, setInputCustom] = useState('')
	const [inputPeople, setInputPeople] = useState('')

	// tip operations
	const tipCalc = () => (inputTotal / 100) * inputCustom

	const checkValues = () =>
		!inputTotal || !inputCustom || !inputPeople ? true : false
	const checkZero = () =>
		inputTotal <= 0 || inputCustom <= 0 || inputPeople <= 0 ? true : false

	const tipAmount = () => {
		if (checkValues() || checkZero()) return '$0.00'

		const tipFull = parseInt(tipCalc())
		const tipPerOnePerson = (tipFull / inputPeople).toFixed(2)

		return `$${tipPerOnePerson}`
	}

	const totalPerPerson = () => {
		if (checkValues() || checkZero()) return '$0.00'

		const tipFull = parseInt(tipCalc())

		const totalPerPerson = (
			(parseFloat(inputTotal) + tipFull) /
			inputPeople
		).toFixed(2)

		return `$${totalPerPerson}`
	}

	const resetInput = () => {
		setInputTotal('')
		setInputCustom('')
		setInputPeople('')
	}

	return (
		<>
			<h1 className='headline'>
				<img src='/images/logo.svg' alt='logo' />
			</h1>

			<div className='container'>
				<UserInput
					changeInputTotal={setInputTotal}
					inputTotal={inputTotal}
					changeInputCustom={setInputCustom}
					inputCustom={inputCustom}
					changeInputPeople={setInputPeople}
					inputPeople={inputPeople}
				/>
				<UserOutput
					tipAmount={tipAmount()}
					totalPerPerson={totalPerPerson()}
					resetInput={resetInput}
				/>
			</div>

			<Attribution />
		</>
	)
}

export default App
