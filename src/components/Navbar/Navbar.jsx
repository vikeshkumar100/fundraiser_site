import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='w-full h-[7vh] md:h-[15vh] flex items-center justify-around gap-4 border-b-2 border-slate-400 p-1'>
          <div>
            <h1 className='text-green-700 text-xl md:text-2xl font-bold'>gocingo</h1>
          </div>
          <div>
            <ul className='flex items-center md:text-lg justify-around gap-4 md:gap-14 lg:gap-24 font-bold'>
              <li><NavLink to="/" className={({isActive})=>`${isActive ? "text-green-700" : "text-black"}`}>Home</NavLink></li>
              <li><NavLink to="other" className={({isActive})=>`${isActive ? "text-green-700" : "text-black"}`}>About</NavLink></li>
              <li><NavLink to="other" className={({isActive})=>`${isActive ? "text-green-700" : "text-black"}`}>Resources</NavLink></li>
              <li><NavLink to="other" className={({isActive})=>`${isActive ? "text-green-700" : "text-black"}`}>Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <button className='bg-slate-900 text-white p-2 hidden text-sm md:text-lg md:px-4 rounded-3xl md:block'>Donate now</button>
          </div>
        </div>
    </>
  )
}

export default Navbar