import React from 'react'

import { BiCopy } from 'react-icons/bi'
import PasswordGenerator from '../assets/projects/PasswordGenerator.png'
import MazeSolver from '../assets/projects/MazeSolver.png'
import ASLearn from '../assets/projects/ASLearn.png'
import EstimatePi from '../assets/projects/EstimatePi.png'

const Projects = () => {
	return (
		<section id='projects' className='bg-white h-[100vh] lg:h-screen container border-b border-gray-200 px-8 lg:px-8 2xl:px-20 pt-[9rem] lg:pt-[3.75rem] flex flex-col justify-start items-start'>
			<h1 className='w-full text-3xl lg:text-xl text-black font-semibold pt-6'>Projects</h1>
			<h2 className='w-7/8 lg:w-1/2 text-2xl lg:text-lg text-gray-400 pt-2 font-light'>I've worked on a few projects since the start of my tenure in college. <br></br>Here are some of my highlight accomplishments so far.</h2>

			<ul className='h-full lg:h-full w-full lg:w-full mt-6 mb-12 lg:mb-12 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 px-4 lg:px-0'>
				<li className='project-card'>
					<img src={PasswordGenerator} alt='PasswordGenerator' className='h-14 w-14 p-0 object-cover aspect-auto'></img>
					<p className='mt-2 text-4xl lg:text-xl font-semi'>
						Password Generator
					</p>
					<p className='mt-2 text-2xl lg:text-sm text-gray-400 font-light'>
						macOS desktop application is designed to generate customizable passwords, offering various options to meet the specific requirements and preferences of the user.
					</p>

					<a href='https://github.com/stevensikorski/password-generator' target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={MazeSolver} alt='MazeSolver' className='h-14 w-14 p-2 object-cover aspect-auto'></img>
					<p className='mt-2 text-4xl lg:text-xl font-semi'>
						Maze Solver
					</p>
					<p className='mt-2 text-2xl lg:text-sm text-gray-400 font-light'>
						A maze solving program utilizes Depth-First Search (DFS) algorithm to systematically explore paths, backtracking whenever necessary, until it finds a solution to navigate through the maze.
					</p>

					<a href='https://github.com/stevensikorski/maze-solver' target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={EstimatePi} alt='EstimatePi' className='h-14 w-14 p-1 object-cover aspect-auto'></img>
					<p className='mt-2 text-4xl lg:text-xl font-semi'>
						Estimate Pi
					</p>
					<p className='mt-2 text-2xl lg:text-sm text-gray-400 font-light'>
						A program that incorporates the Monte Carlo algorithm to estimate the value of Pi by randomly generating points within a square and determining the ratio of points falling within a quarter of a circle to the total number of points.
					</p>	

					<a href='https://github.com/stevensikorski/estimate-pi' target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={ASLearn} alt='ASLearn' className='h-14 w-14 p-0 object-cover aspect-auto'></img>
					<p className='mt-2 text-4xl lg:text-xl font-semi'>
						ASLearn
					</p>
					<p className='mt-2 text-2xl lg:text-sm text-gray-400 font-light'>
						Web application that provides English to American Sign Language (ASL) translations. Group project for HackNYU 2022.
					</p>

					<a href='https://github.com/stevensikorski/ASLearn' target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card hidden lg:block'></li>
				<li className='project-card hidden lg:block'></li>
			</ul>
		</section>
	)
}

export default Projects