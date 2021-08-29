function UserOutput({ tipAmount, totalPerPerson, resetInput }) {
	return (
		<div className='output-container'>
			<div className='top'>
				<div className='w-100'>
					<div className='left'>
						<h3>Tip Amount</h3>
						<span>/ person</span>
					</div>
					<h2 className={tipAmount === '$0.00' ? '' : 'active'}>{tipAmount}</h2>
				</div>
				<div className='w-100'>
					<div className='left'>
						<h3>Total</h3>
						<span>/ person</span>
					</div>
					<h2 className={totalPerPerson === '$0.00' ? '' : 'active'}>
						{totalPerPerson}
					</h2>
				</div>
			</div>

			<button
				className='reset-btn'
				disabled={totalPerPerson === '$0.00'}
				onClick={() => resetInput()}
			>
				reset
			</button>
		</div>
	)
}

export default UserOutput
