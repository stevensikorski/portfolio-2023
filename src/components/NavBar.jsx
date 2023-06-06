import React from 'react'
import { Link } from 'react-scroll'

import icon from '../assets/icon.svg'
import { links } from './constants/constants.js'
import { BsLinkedin, BsFileEarmarkText } from 'react-icons/bs'
import { VscGithub } from 'react-icons/vsc'

const NavBar = () => {
	return (
		<nav className='w-full bg-white border-b border-black text-black fixed'>
			<div className='h-[9rem] lg:h-[3.75rem] container px-6 lg:px-8 2xl:px-20'>
				{/* Icon */}
				<a href={links[0].website}>
					<img src={icon} alt='logo' className='h-16 w-16 lg:h-8 lg:w-8 mx-2 lg:mx-0'></img>
				</a>

				{/* Name */}
				<p className='ml-6 mr-auto text-3xl lg:text-lg'>
					Steven Sikorski
				</p>

				{/* Menu */}
				<ul className='list-none flex'>

					{/* Menu Shortcuts */}
					<Link to={links[0].home} spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						Home
					</Link>
					<Link to={links[0].about} spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						About
					</Link>
					<Link to={links[0].projects} spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						Projects
					</Link>
					<Link to={links[0].contact} spy={true} smooth={true} offset={0} duration={500} className='h-10 w-24 navbar-button cursor-pointer text-lg hidden lg:flex'>
						Contact
					</Link>

					{/* Menu Buttons */}
					<a href={links[0].resume} target='_blank' rel='noreferrer'>
						<li className='h-24 w-24 lg:h-10 lg:w-10 navbar-button'>
							<BsFileEarmarkText className='h-10 w-10 lg:h-5 lg:w-5'/>
						</li>
					</a>
					<a href={links[0].linkedin} target='_blank' rel='noreferrer'>
						<li className='h-24 w-24 lg:h-10 lg:w-10 navbar-button'>
							<BsLinkedin className='h-10 w-10 lg:h-5 lg:w-5'/>
						</li>
					</a>
					<a href={links[0].github} target='_blank' rel='noreferrer'>
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