import React from 'react'
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <div className='w-screen bg-[#d5e1e1] pt-4 font-poppins overflow-hidden'>
    <div className='flex flex-col space-y-4 py-4 px-24'>
    <nav className='flex justify-between w-full items-center'>
        <div className='flex items-center justify-start text-left'>
        <h1 className='font-poppins text-base text-[#252525] uppercase'>
        Figma's conference for people<br/>who build products
        </h1>
        </div>

        <div className='flex justify-start space-x-6 w-1/4 items-center p-4'>
        <a
            href='/'
            className="text-[#252525] border-[#252525] uppercase border-dotted border-b-4"
          >
            <h1>English</h1>
          </a>

          <a
            href='/'
            className="text-[#252525] border-[#252525] uppercase border-dotted border-b-4"
          >
            <h1>FAQ</h1>
          </a>


          <a
            href='/'
            className="text-[#d5e1e1] bg-[#252525] py-4 px-6 uppercase rounded-full"
          >
            <h1>Get Tickets</h1>
          </a>


        </div>
    </nav>

    <div className='flex justify-between w-full items-center'>

    <div className='flex items-center justify-evenly text-left space-x-12'>
        <h1 className='font-poppins text-base text-[#252525] uppercase'>
        JUNE 26-27<br/>2024
        </h1>

        <h1 className='font-poppins text-base text-[#252525] uppercase'>
        Moscone Center<br/>San Francisco, CA
        </h1>

        </div>

        <div className='flex items-center w-1/4 justify-start text-left p-4'>
        <h1 className='font-poppins text-base text-[#252525] uppercase'>
        IN person & virtual
        </h1>

        
        </div>

    
    </div>

    <div className='flex w-svreen items-center justify-center'>
    <img className='w-full' src='/assets/title.png' />

    </div>
    

    </div>
    <div className='flex w-screen overflow-hidden items-center justify-center'>
    <img src='/assets/h1.png'/>
    </div>
    </div>
  )
}

export default Section1