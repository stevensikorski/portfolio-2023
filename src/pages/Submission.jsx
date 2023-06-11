import React from 'react'
import { useState, useEffect } from 'react';

import icon from '../assets/icon.svg'

const Submission = () => {
    const [countdown, setCountdown] = useState(3)

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1)
        }, 1000);
    
        setTimeout(() => {
            clearInterval(countdownInterval)
            window.location.href = '/'
        }, 3000);
    
        return () => {
            clearInterval(countdownInterval)
        }
    }, [])

    return (
        <section className='h-screen w-screen flex flex-col justify-center items-center text-center'>
            <a href='/'>
                <img src={icon} alt='logo' className='h-32 w-32 lg:h-16 lg:w-16 mx-2 lg:mx-0'></img>
            </a>

            <p className='text-4xl lg:text-3xl mt-4 text-center'>Submission received!</p>
            <p className='text-xl lg:text-base font-light text-gray-400 mt-1 text-center'>Redirecting in {countdown} seconds</p>
        </section>
    )
}

export default Submission