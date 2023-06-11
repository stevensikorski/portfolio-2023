import React from 'react'

const About = () => {
	return (
		<section id='about' className='bg-white h-screen lg:h-[75vh] container border-b border-gray-200 px-8 lg:px-8 2xl:px-20 pt-[9rem] lg:pt-[3.75rem] flex flex-col justify-start items-start'>
			<h1 className='w-full text-3xl lg:text-xl text-black font-semibold pt-6'>About</h1>
			<h2 className='w-7/8 lg:w-1/2 text-2xl lg:text-lg text-gray-400 pt-2 font-light'>A brief introduction to me, my background, and my interests. <br></br>Learn a thing or two about me. </h2>

			<div className='h-full w-full mt-8 mb-[9rem] lg:mb-[3.75rem] flex flex-col lg:flex-row px-4'>
				<div className='h-full w-full flex flex-col justify-start items-center p-6 lg:border-r border-gray-300'>
					<p className='text-2xl lg:text-lg text-center underline underline-offset-8'>Background</p>

					<p className='text-xl lg:text-sm font-light text-gray-800 mt-8 leading-loose'>
						I'm a 20-year-old born and raised in New York City. Growing up with Polish heritage, I have always been proud of my background and the traditions that have greatly influenced my identity and perspective on life. I approach life with ambitious aspirations and a strong work ethic, consistently striving to reach my goals and make a meaningful impact. I demonstrate resilience and unwavering determination by persistently pushing through even the most challenging times, refusing to be discouraged or deterred. I strive to maintain a healthy balance in life, prioritizing self-care and fostering a positive mindset that permeates all areas of my life.
					</p>
				</div>

				<div className='h-full w-full flex flex-col justify-start items-center p-6'>
					<p className='text-2xl lg:text-lg text-center underline underline-offset-8'>Hobbies & Interests</p>

					<p className='text-xl lg:text-sm font-light text-gray-800 mt-8 leading-loose'>
						I have diverse hobbies and interests that keep me engaged and fulfilled. Computer science is one of my passions, as I enjoy exploring programming intricacies and solving challenging puzzles. Gaming is another favorite pastime, where I immerse myself in virtual worlds. Additionally, I have a deep appreciation for motorsports. The combination of speed, precision, and engineering behind these vehicles fascinates me, and I admirine the skill of professional drivers. Spending quality time with friends is important to me, whether engaging in shared hobbies or having meaningful conversations. I also prioritize my health by maintaining physical and mental well-being through regular exercise, a balanced diet, and weightlifting.
					</p>
				</div>

				<div className='h-full w-full flex flex-col justify-start items-center p-6 lg:border-l border-gray-300'>
					<p className='text-2xl lg:text-lg text-center underline underline-offset-8'>Education</p>

					<p className='text-xl lg:text-sm font-light text-gray-800 mt-8 leading-loose'>
						I'm currently a student at Hunter College, and I'm excited to begin my junior year as part of the Class of 2025. My main focus is on Computer Science, a field that I find incredibly inspiring because of its endless possibilities and practical uses in the real world. To complement my studies, I've also decided to pursue a minor in Mathematics, which will help me develop my problem-solving and analytical skills. My goal is to build a solid foundation in these subjects and make meaningful contributions to the ever-changing world of technology. As I approach the halfway mark of my college experience, I'm filled with anticipation and excitement for the upcoming semesters, eager to embrace the learning, growth, and new opportunities that await me.
					</p>
				</div>
			</div>
		</section>
	)	
}

export default About