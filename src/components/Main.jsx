import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";


export const Main = () => {
  return (
    <div id='main'>
        <img 
        className="w-full h-screen object-cover" 
        src="src/assets/bg.jpg"
        alt='/'/>
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-950">I'm Dave Loop</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-950">I'm a
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Software Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Tech lover',
                    1000,
                    'Coder',
                    1000,
                    'World explorer',
                    1000
                    ]}
                    wrapper="div"
                    cursor="true"
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <FaTwitter className='cursor-pointer' size={20} />
                    <FaFacebook className='cursor-pointer' size={20} />
                    <FaLinkedin className='cursor-pointer' size={20} />
                    <FaGithub  className='cursor-pointer' size={20} />
                </div>
            
            </div>
        </div>
    </div>
  )
}
