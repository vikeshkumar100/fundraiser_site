import Accordian from '@/components/Accordian/Accordian'
import Domaincard from '@/components/Cards/Domaincard'
import Donatecard from '@/components/Cards/Donatecard'
import Infocard from '@/components/Cards/Infocard'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='w-full min-h-screen'>
        {/* hero section */}
          <div className='flex flex-col items-center p-4 md:p-12 gap-14'>

            {/* text area  */}
            <div className='md:w-5/12 flex flex-col text-center items-center gap-6'>
              <h2 className='font-semibold text-2xl md:text-5xl text-center'>Great Futures are built with a small charity</h2>
              <p className='font-semibold text-xl md:text-2xl'>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
              <span className='w-full flex justify-center gap-4'>
                <button className='bg-slate-900 text-white md:text-lg py-2 px-5 rounded-3xl'>Donate now</button>
                <button className='bg-stone-300 text-black md:text-lg py-2 px-4 font-bold rounded-3xl'>▶️ Watch Video</button>
              </span>
            </div>

            {/* card area  */}
            <div className='text-white flex flex-wrap items-end justify-center gap-3'>
              <div>
                <Donatecard color="bg-[hsl(164,86%,16%)]"/>
                <div className='bg-gray-900 text-white text-2xl flex w-[200px] rounded-2xl p-2 mt-3'>
                  <span>🧟‍♀️</span>
                  <span>Let them be heard</span>
                </div>
              </div>
              <div><Domaincard/></div>

              <div className='text-black bg-gray-300 font-semibold h-[20vh] w-[200px] rounded-3xl flex flex-col items-center justify-end gap-6 text-center'>
                <h2 className='text-2xl '>Join 5000+ People Donate</h2>
                <button className='bg-slate-400 px-6 py-2 rounded-2xl'>Join community ✅</button>
              </div>

              <div><Domaincard/></div>             
              <div>
                <Donatecard color="bg-[rgb(194,227,78,90%)]" tcolor="text-black"/>
                <div className='bg-[rgb(41,51,17)] text-[rgb(192,239,81)] text-2xl flex w-[200px] rounded-2xl p-2 mt-3'>
                  <span>🧟‍♀️</span>
                  <span>Your home for help</span>
                </div>
              </div>            
            </div>
          </div>


          <div className='w-[95%] bg-[rgb(205,255,87)] flex flex-col
          py-16 items-center gap-16 mx-auto rounded-2xl'>
            <div className='font-semibold text-2xl md:text-5xl md:w-6/12 text-center'>
              <h2>Fundraising on Gocingo takes just a few minutes</h2>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap justify-around w-full'>
              <Infocard image="/kidpic.jpg" title="Give Happiness" content="Giving happiness to others is one of the most fulfilling things you can do in life"/>
              <Infocard image="/kidpic.jpg" title="Share Love" content="Giving happiness to others is one of the most fulfilling things you can do in life"/>
              <Infocard image="/kidpic.jpg" title="Build Socially" content="Giving happiness to others is one of the most fulfilling things you can do in life"/>
            </div>
          </div>

          {/* accordian  */}
          <Accordian/>
      </div>
    </>
  )
}
export default Home