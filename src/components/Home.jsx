import React from 'react'

import { links } from './constants/constants.js'

const Home = () => {
	return (
		<section id='home' className='lg:h-screen pb-10 lg:pb-0 container border-b border-gray-300 px-8 lg:px-16 2xl:px-40 pt-[9rem] lg:pt-[3.75rem] flex justify-end lg:justify-between items-center flex-col-reverse lg:flex-row'>
			<div className='mx-auto lg:pr-16'>
				<p className='text-8xl pt-24 lg:pt-0 text-center'>Hello there! <span className='animate-waving inline-block'>👋🏻</span></p>
				<p className='text-4xl lg:px-0 lg:text-lg pt-12 lg:pt-6 lg:pb-6 text-gray-400 text-center'>I'm Steven Sikorski, a Computer Science Undergraduate from New York City. 🗽</p>
				
				<ul className='bg-gray-100 rounded px-2 py-2 mt-24 lg:mt-0 flex flex-row text-3xl lg:text-2xl justify-center items-center'>
					<p className='px-2 text-gray-400 font-thin'>Tech Stack</p>

					<img className='techstack' alt='C++' src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'></img>
					<img className='techstack' alt='C#' src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'></img>
					<img className='techstack' alt='Python' src='https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821155028%21Python-logo-notext.svg'></img>

					<img className='techstack' alt='HTML' src='https://www.w3.org/html/logo/downloads/HTML5_Badge.svg'></img>
					<img className='techstack' alt='CSS' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'></img>
					<img className='techstack' alt='JavaScript' src='https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg'></img>
					<img className='techstack' alt='React' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'></img>
					<img className='techstack' alt='Tailwind' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'></img>
				</ul>
			</div>

			<img className='w-3/4 aspect-square lg:max-w-md bg-white rounded-[100%] border-8 border-gray-100 mx-auto mt-[9rem] lg:mt-0' src={links[0].picture}></img>
		</section>
	)
}

export default Home