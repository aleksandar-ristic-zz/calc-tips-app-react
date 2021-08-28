import React from 'react'

function Error({ input }) {
	if (parseFloat(input) > 0) {
		return <span className='active'>Can't be zero</span>
	}
	return <></>
}

export default Error
