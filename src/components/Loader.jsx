import React, { useEffect, useState } from 'react'

import icon from '../assets/icon.svg'

const Loader = () => {
	const [heightClass, setHeightClass] = useState('h-screen')
	
	window.scrollTo(0, 0)
	window.history.scrollRestoration = 'manual'

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		setTimeout(() => {
			setHeightClass('h-0')
			setTimeout(() => {
				document.body.style.overflow = ''
			}, 500)
		}, 1000)

		return () => {
		document.body.style.overflow = ''
		}
	}, [])

	return (
		<div className={`${heightClass} w-full flex justify-center items-center transition-all duration-500 ease-in-out`}>
			<img src={icon} alt='logo' className='h-32 w-32 lg:h-24 lg:w-24 animate-fade '></img>
		</div>
	)
}

export default Loader