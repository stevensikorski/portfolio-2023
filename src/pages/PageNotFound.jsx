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
            <p className='text-4xl lg:text-2xl mt-4 text-center'>Error 404: Page Not Found</p>
            <p className='text-xl lg:text-base font-light text-gray-400 mt-1 text-center'>Redirecting in {countdown} seconds</p>
        </section>
    )
}

export default Submission