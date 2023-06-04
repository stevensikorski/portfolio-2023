import React from 'react'

import icon from '../assets/icon.svg'

const Loader = () => {
  return (
    <div class='h-screen w-full flex justify-center items-center'>
        <img src={icon} alt='logo' className='h-32 w-32 lg:h-24 lg:w-24 animate-fade'></img>
    </div>
  )
}

export default Loader