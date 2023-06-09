import React from 'react'

import { links } from './constants/constants.js'
import { BiCopy } from 'react-icons/bi'
import PasswordGenerator from '../assets/projects/PasswordGenerator.png'
import MazeSolver from '../assets/projects/MazeSolver.png'
import ASLearn from '../assets/projects/ASLearn.png'
import EstimatePi from '../assets/projects/EstimatePi.png'
import macOSSystemInfo from '../assets/projects/macOSSystemInfo.png'
import Brush from '../assets/projects/Brush.png'

const Projects = () => {
	return (
		<section id='projects' className='bg-white h-[100vh] lg:h-screen container border-b border-gray-200 px-8 lg:px-8 2xl:px-20 pt-[9rem] lg:pt-[3.75rem] flex flex-col justify-start items-start'>
			<h1 className='w-full text-3xl lg:text-xl text-black font-semibold pt-6'>Projects</h1>
			<h2 className='w-7/8 lg:w-1/2 text-2xl lg:text-lg text-gray-400 pt-2 pr-32 lg:pr-0'>I've worked on a few projects since the start of my tenure in college. Here are some of my highlight accomplishments so far.</h2>

			<ul className='h-full lg:h-full w-full lg:w-full lg:px-0 mt-6 mb-12 lg:mb-12 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 px-4'>
				<li className='project-card'>
					<img src={PasswordGenerator} alt='PasswordGenerator' className='h-14 w-14 p-0 object-cover aspect-auto'></img>
					<p className='mt-2 text-3xl lg:text-xl font-semi'>
						Password Generator
					</p>
					<p className='mt-2 text-xl lg:text-sm text-gray-400'>
						Desktop application for password generation. Purpose-built for macOS.
					</p>

					<a href={links[0].project1} target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={MazeSolver} alt='MazeSolver' className='h-14 w-14 p-2 object-cover aspect-auto'></img>
					<p className='mt-2 text-3xl lg:text-xl font-semi'>
						Maze Solver
					</p>
					<p className='mt-2 text-xl lg:text-sm text-gray-400'>
						Navigation program for mazes using depth first search.
					</p>

					<a href={links[0].project2} target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={ASLearn} alt='ASLearn' className='h-14 w-14 p-1 object-cover aspect-auto'></img>
					<p className='mt-2 text-3xl lg:text-xl font-semi'>
						ASLearn
					</p>
					<p className='mt-2 text-xl lg:text-sm text-gray-400'>
						Group project for HackNYU 2022.
					</p>

					<a href={links[0].project3} target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={EstimatePi} alt='EstimatePi' className='h-14 w-14 p-0 object-cover aspect-auto'></img>
					<p className='mt-2 text-3xl lg:text-xl font-semi'>
						Estimate Pi
					</p>
					<p className='mt-2 text-xl lg:text-sm text-gray-400'>
						Estimation of the irrational number pi by utilizing the Monte Carlo Algorithm.
					</p>

					<a href={links[0].project4} target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={macOSSystemInfo} alt='macOS System Info' className='h-14 w-14 p-1 object-cover aspect-auto'></img>
					<p className='mt-2 text-3xl lg:text-xl font-semi'>
						macOS System Info
					</p>
					<p className='mt-2 text-xl lg:text-sm text-gray-400'>
						Application to monitor system information on macOS based systems.
					</p>

					<a href={links[0].project5} target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>

				<li className='project-card'>
					<img src={Brush} alt='Brush' className='h-14 w-14 p-0 object-cover aspect-auto'></img>
					<p className='mt-2 text-3xl lg:text-xl font-semi'>
						Brush
					</p>
					<p className='mt-2 text-xl lg:text-sm text-gray-400'>
						Photo editing application for macOS based systems. Currently work in progress...
					</p>

					<a href={links[0].project6} target='_blank' rel='noreferrer' className='flex flex-row justify-start items-center mt-auto'>
						<BiCopy className='h-6 lg:h-5 w-6 lg:w-5 text-gray-400'/>
						<p className='ml-2 text-2xl lg:text-base text-gray-400'>
							github.com
						</p>
					</a>
				</li>
			</ul>
		</section>
	)
}	

export default Projects