import React from 'react'
import pfp from '../assets/pictures/profile-picture.jpeg'

const Home = () => {
	return (
		<section id='home' className='bg-white h-screen container border-b border-gray-200 px-6 lg:px-8 2xl:px-32 pt-[9rem] lg:pt-[3.75rem] flex flex-col lg:flex-row-reverse justify-start lg:justify-center items-center'>
			<img src={pfp} alt='' className='w-1/2 lg:w-1/3 rounded-[100%] py-[6rem] lg:py-0 transition-all duration-300'></img>

			<div className='flex flex-col justify-between items-center lg:items-start flex-grow'>
				<h1 className='text-9xl lg:text-8xl text-center lg:text-left'>Hello there! <span className='animate-waving inline-block'>👋🏻</span></h1>
				<h2 className='text-4xl lg:text-lg text-center lg:text-left leading-relaxed mt-8 mb-auto lg:pb-12 text-gray-400 font-light'>I'm Steven Sikorski, a Computer Science Undergraduate from New York City. 🗽</h2>

				<div className='flex flex-col lg:flex-row justify-center item-center pb-[6rem] lg:pb-0'>
					<p className='text-3xl lg:text-lg text-center pb-6 lg:pb-0'><span className='border-b border-gray-300 pb-2 lg:pb-0 lg:border-0'>Tech Stack</span><span className='font-thin text-gray-300 px-4 hidden lg:inline-block'>|</span></p>
					<ul className='flex justify-center pt-2 lg:pt-0'>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'></img>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'></img>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821155028%21Python-logo-notext.svg'></img>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg'></img>

						<img className='techstack' alt='' src='https://www.w3.org/html/logo/downloads/HTML5_Badge.svg'></img>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'></img>
						<img className='techstack' alt='' src='https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg'></img>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'></img>
						<img className='techstack' alt='' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'></img>

						<img className='techstack' alt='.NET' src='https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg'></img>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Home