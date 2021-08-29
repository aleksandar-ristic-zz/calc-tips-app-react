import { useEffect, useState } from 'react'

function Error({ input }) {
	const [show, setShow] = useState(false)

	useEffect(() => {
		if (parseFloat(input) <= 0) {
			setShow(true)
			setTimeout(() => {
				setShow(false)
			}, 5000)
		}
	}, [input])

	if (show) {
		return <span className='active'>Can't be zero</span>
	}
	return null
}

export default Error
