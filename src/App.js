import { useState } from 'react'

function App() {
	const [inputTotal, setInputTotal] = useState('')
	const [inputCustom, setInputCustom] = useState('')
	const [inputPeople, setInputPeople] = useState('')

	const checkInput = custom =>
		['5', '10', '15', '25', '50'].filter(radio => radio === custom)

	const tipCalc = () => (inputTotal / 100) * inputCustom
	const checkValues = () =>
		!inputTotal || !inputCustom || !inputPeople ? true : false
	const checkZero = () =>
		inputTotal <= 0 || inputCustom <= 0 || inputPeople <= 0 ? true : false

	const tipAmount = () => {
		if (checkValues() || checkZero()) return `$0.00`

		const tipFull = tipCalc()
		const tipPerPerson = (tipFull / inputPeople).toFixed(2)

		return `$${tipPerPerson}`
	}

	const totalPerPerson = () => {
		if (checkValues() || checkZero()) return `$0.00`

		const tipFull = parseInt(tipCalc())
		const totalPerPerson = (
			(parseInt(inputTotal) + tipFull) /
			inputPeople
		).toFixed(2)

		return `$${totalPerPerson}`
	}

	return (
		<>
			<h1 className='headline'>
				<img src='/images/logo.svg' alt='logo' />
			</h1>

			<div className='container'>
				<div className='input-container'>
					<div className='w-100'>
						<p>
							Bill <span className='total-error'></span>
						</p>
						<div className='input-wrapper'>
							<img src='images/icon-dollar.svg' alt='dollar' />
							<input
								className='total-input'
								placeholder='0'
								type='number'
								value={inputTotal}
								onChange={e => setInputTotal(e.target.value)}
							/>
						</div>
					</div>

					<div className='w-100'>
						<p>
							Select Tip % <span className='custom-error'></span>
						</p>
						<div className='grid-container'>
							<label
								htmlFor='5%'
								className={inputCustom === '5' ? 'checked' : ''}
							>
								5%
								<input
									type='radio'
									value='5'
									name='tip-percent'
									id='5%'
									onChange={e => setInputCustom(e.target.value)}
								/>
							</label>
							<label
								htmlFor='10%'
								className={inputCustom === '10' ? 'checked' : ''}
							>
								10%
								<input
									type='radio'
									value='10'
									name='tip-percent'
									id='10%'
									onChange={e => setInputCustom(e.target.value)}
								/>
							</label>
							<label
								htmlFor='15%'
								className={inputCustom === '15' ? 'checked' : ''}
							>
								15%
								<input
									type='radio'
									value='15'
									name='tip-percent'
									id='15%'
									onChange={e => setInputCustom(e.target.value)}
								/>
							</label>
							<label
								htmlFor='25%'
								className={inputCustom === '25' ? 'checked' : ''}
							>
								25%
								<input
									type='radio'
									value='25'
									name='tip-percent'
									id='25%'
									onChange={e => setInputCustom(e.target.value)}
									checked={inputCustom === '25'}
								/>
							</label>
							<label
								htmlFor='50%'
								className={inputCustom === '50' ? 'checked' : ''}
							>
								50%
								<input
									type='radio'
									value='50'
									name='tip-percent'
									id='50%'
									onChange={e => setInputCustom(e.target.value)}
								/>
							</label>
							<input
								className='custom-input'
								type='number'
								placeholder='Custom'
								value={checkInput(inputCustom).length > 0 ? '' : inputCustom}
								maxLength='3'
								onChange={e => setInputCustom(e.target.value)}
							/>
						</div>
					</div>

					<div className='w-100'>
						<p>
							Number of People <span className='people-error'></span>
						</p>
						<div className='input-wrapper'>
							<img src='/images/icon-person.svg' alt='dollar' />
							<input
								className='people-input'
								placeholder='0'
								type='number'
								value={inputPeople}
								onChange={e => setInputPeople(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className='output-container'>
					<div className='top'>
						<div className='w-100'>
							<div className='left'>
								<h3>Tip Amount</h3>
								<span>/ person</span>
							</div>
							<h2
								className={
									'tip-amount' + tipAmount() === '$0.00' ? '' : 'active'
								}
							>
								{tipAmount()}
							</h2>
						</div>
						<div className='w-100'>
							<div className='left'>
								<h3>Total</h3>
								<span>/ person</span>
							</div>
							<h2 className='total-amount'>{totalPerPerson()}</h2>
						</div>
					</div>

					<button className='reset-btn' disabled>
						reset
					</button>
				</div>
			</div>

			<div className='attribution'>
				Challenge by{' '}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					rel='noreferrer'
					target='_blank'
				>
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a
					href='https://github.com/aleksandar-ristic'
					rel='noreferrer'
					target='_blank'
				>
					aleksandar-ristic
				</a>
				.
			</div>
		</>
	)
}

export default App
