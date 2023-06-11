import React from 'react'
import { Link } from 'react-scroll'

import icon from '../assets/icon.svg'
import { BsLinkedin, BsFileEarmarkText } from 'react-icons/bs'
import { VscGithub } from 'react-icons/vsc'

const NavBar = () => {
	return (
		<nav className='w-full bg-white border-b border-black text-black z-50 filter backdrop-blur-md backdrop-opacity-50 fixed'>
			<div className='h-[9rem] lg:h-[3.75rem] container px-6 lg:px-8 2xl:px-20 flex justify-between items-center'>
				{/* Icon */}
				<a href='https://www.stevensikorski.com/'>
					<img src={icon} alt='logo' className='h-16 w-16 lg:h-8 lg:w-8 mx-2 lg:mx-0'></img>
				</a>

				{/* Name */}
				<p className='ml-4 mr-auto text-3xl lg:text-lg'>
					Steven Sikorski
				</p>

				{/* Menu */}
				<ul className='list-none flex'>

					{/* Menu Shortcuts */}
					<Link to='home' spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						Home
					</Link>
					<Link to='about' spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						About
					</Link>
					<Link to='projects' spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						Projects
					</Link>
					<Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						Contact
					</Link>

					{/* Menu Buttons */}
					<a href='https://drive.google.com/file/d/17Tid8ogKmrl9bvpPQ5P5aVoqF2K7jQdP/view?usp=sharing' target='_blank' rel='noreferrer'>
						<li className='h-24 w-24 lg:h-10 lg:w-10 navbar-button'>
							<BsFileEarmarkText className='h-10 w-10 lg:h-5 lg:w-5'/>
						</li>
					</a>
					<a href='https://www.linkedin.com/in/steven-sikorski' target='_blank' rel='noreferrer'>
						<li className='h-24 w-24 lg:h-10 lg:w-10 navbar-button'>
							<BsLinkedin className='h-10 w-10 lg:h-5 lg:w-5'/>
						</li>
					</a>
					<a href='https://www.github.com/stevensikorski' target='_blank' rel='noreferrer'>
						<li className='h-24 w-24 lg:h-10 lg:w-10 navbar-button'>
							<VscGithub className='h-12 w-12 lg:h-6 lg:w-6'/>
						</li>
					</a>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar