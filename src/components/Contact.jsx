import React from 'react'

const Contact = () => {
	return (
		<section id='contact' className='bg-white h-screen container border-b border-gray-200 px-8 lg:px-8 2xl:px-20 pt-[9rem] lg:pt-[3.75rem] flex flex-col justify-start items-start'>
			<h1 className='w-full text-3xl lg:text-xl text-black font-semibold pt-6'>Contact</h1>
			<h2 className='w-7/8 lg:w-1/2 text-2xl lg:text-lg text-gray-400 pt-2'>Reach out to me with any inquiries or requests.</h2>

			<form action='https://formsubmit.co/contact@stevensikorski.com' method='POST' className='h-full w-full mx-auto mt-6 mb-[9rem] lg:mb-[3.75rem] flex flex-col justify-start items-center'>
				<input type='hidden' name='_next' value='http://localhost:3000/submission'></input>
				<input type='hidden' name='_captcha' value='false'></input>

				<label className='w-full text-left text-4xl lg:text-lg pb-2 lg:pb-0'>Name</label>
				<div className='w-full flex flex-col lg:flex-row'>
					<input name='firstName' type='text' required placeholder='First name' className='h-14 lg:h-10 w-full bg-white rounded border border-gray-300 lg:mr-2 px-2 text-2xl lg:text-sm font-light'></input>
					<input name='lastName' type='text' required placeholder='Last name' className='h-14 lg:h-10 w-full bg-white rounded border border-gray-300 lg:ml-2 mt-6 lg:mt-0 px-2 text-2xl lg:text-sm font-light'></input>
				</div>

				<label className='w-full text-left text-4xl lg:text-lg pt-12 lg:pt-4 pb-2 lg:pb-0'>Email</label>
				<input name='email' type='email' required className='h-14 lg:h-10 w-full bg-white rounded border border-gray-300 px-2 text-2xl lg:text-sm font-light'></input>

				<label className='w-full text-left text-4xl lg:text-lg pt-12 lg:pt-4 pb-2 lg:pb-0'>Phone</label>
				<input name='phone' type='text' className='h-14 lg:h-10 w-full bg-white rounded border border-gray-300 px-2 text-2xl lg:text-sm font-light'></input>

				<label className='w-full text-left text-4xl lg:text-lg pt-12 lg:pt-4 pb-2 lg:pb-0'>Subject</label>
				<input name='subject' type='text' required className='h-14 lg:h-10 w-full bg-white rounded border border-gray-300 px-2 text-2xl lg:text-sm font-light'></input>

				<label className='w-full text-left text-4xl lg:text-lg pt-12 lg:pt-4 pb-2 lg:pb-0'>Message</label>
				<textarea name='message' type='text' required className='w-full bg-white rounded border border-gray-300 p-2 text-2xl lg:text-sm font-light flex flex-grow resize-none'></textarea>

				<button type='submit' className='p-6 lg:p-2 mt-8 navbar-button text-3xl lg:text-base'>Send Message</button>
			</form>
		</section>
	)
}

export default Contact