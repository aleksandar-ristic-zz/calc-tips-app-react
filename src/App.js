import { useState } from 'react'

function App() {
	const [inputTotal, setInputTotal] = useState(1)
	const [inputCustom, setInputCustom] = useState(1)
	const [inputPeople, setInputPeople] = useState(1)

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
							<label htmlFor='5%'>
								5%
								<input type='radio' value='5' name='tip-percent' id='5%' />
							</label>
							<label htmlFor='10%'>
								10%
								<input type='radio' value='10' name='tip-percent' id='10%' />
							</label>
							<label htmlFor='15%'>
								15%
								<input type='radio' value='15' name='tip-percent' id='15%' />
							</label>
							<label htmlFor='25%'>
								25%
								<input type='radio' value='25' name='tip-percent' id='25%' />
							</label>
							<label htmlFor='50%'>
								50%
								<input type='radio' value='50' name='tip-percent' id='50%' />
							</label>
							<input
								className='custom-input'
								type='number'
								placeholder='Custom'
								value={inputCustom}
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
							<h2 className='tip-amount'>$0.00</h2>
						</div>
						<div className='w-100'>
							<div className='left'>
								<h3>Total</h3>
								<span>/ person</span>
							</div>
							<h2 className='total-amount'>$0.00</h2>
						</div>
					</div>

					<button className='reset-btn' disabled>
						reset
					</button>
				</div>
			</div>

			<div className='attribution'>
				Challenge by
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					rel='noreferrer'
					target='_blank'
				>
					Frontend Mentor
				</a>
				. Coded by
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
