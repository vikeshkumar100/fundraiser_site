import React from 'react'

const Donatecard = ({color,tcolor}) => {
  return (
    <div className={`w-[200px] h-[43vh]  flex flex-col justify-between pt-8 px-4 pb-2 rounded-3xl ${color} ${tcolor}`}>
                <span>
                  <h2 className='text-4xl'>65%</h2>
                  <p className='font-light'>17 Thousand People dies, Thousand injured , Houses and buildings destroyed. Turkey-Syria Grieves</p>
                </span>
                <button className='py-3 px-6 rounded-3xl bg-[rgba(119,150,148,0.29)] '>Donate now ✅</button>
    </div>
  )
}

export default Donatecard