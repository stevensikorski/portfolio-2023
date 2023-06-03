import React from 'react'

import icon from '../assets/icon.svg';
import { links } from './constants/constants.js';
import { BsLinkedin, BsFileEarmarkText } from 'react-icons/bs';
import { VscGithub, VscMail } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
	return (
		<nav className='w-full bg-white border-b border-black fixed'>
			<div class="h-[3.75rem] max-w-screen-2xl mx-auto px-8 2xl:px-16 flex justify-between items-center">
				<a href="https://www.stevensikorski.com/">
					<img src={icon} alt='logo' className='h-8 w-8 ml-4'></img>
				</a>

				<p className='ml-4 mr-auto'>
					Steven Sikorski
				</p>

				<ul className='list-none flex'>
					<a href={links[0].about}>
						<li className='h-10 w-24 navbar-button'>
							About
						</li>
					</a>
					<a href={links[0].projects}>
						<li className='h-10 w-24 navbar-button'>
							Projects
						</li>
					</a>
					<a href={links[0].resume} target='_blank' rel='noreferrer'>
						<li className='h-10 w-10 navbar-button'>
							<BsFileEarmarkText className='h-5 w-5'/>
						</li>
					</a>
					<a href={links[0].email} target='_blank' rel='noreferrer'>
						<li className='h-10 w-10 navbar-button'>
							<VscMail className='h-6 w-6'/>
						</li>
					</a>
					<a href={links[0].linkedin} target='_blank' rel='noreferrer'>
						<li className='h-10 w-10 navbar-button'>
							<BsLinkedin className='h-5 w-5'/>
						</li>
					</a>
					<a href={links[0].github} target='_blank' rel='noreferrer'>
						<li className='h-10 w-10 navbar-button'>
							<VscGithub className='h-6 w-6'/>
						</li>
					</a>
					<button className='h-10 w-10 navbar-button lg:hidden'>
						<GiHamburgerMenu className='h-5 w-5'/>
					</button>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar

/*

<nav className='h-16 w-full border-b border-black fixed flex justify-between items-center lg:px-32 max-w-screen-lg'>
				<a><img src={icon} className='h-8 w-8 m-3'></img></a>

				<p className=''>Steven Sikorski</p>

				<ul className='list-none ml-auto'>
					<p>
						Test
					</p>
				</ul>
		</nav>

*/