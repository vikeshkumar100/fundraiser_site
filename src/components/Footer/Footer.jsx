import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='w-[95vw] p-6 bg-[rgb(6,78,59)] text-stone-300 flex flex-col gap-9 rounded-xl'>
          <div><button className='px-6 py-2 bg-[rgb(17,94,89)] rounded-3xl'>Donate now ✅</button></div>
          <div className='border-t-2 flex justify-between'>
            <ul className='flex gap-3 pt-4'>
              <li>©2023 Gocinga NGO.</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
            <ul className='flex gap-3'>
              <li>🤍</li>
              <li>🤍</li>
              <li>🤍</li>
            </ul>
          </div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi voluptatibus illum, autem eveniet aperiam quam at itaque impedit fugit nostrum dolorum perspiciatis tempore laborum officia deserunt eum doloremque hic distinctio aut earum commodi amet voluptatum. Quos magnam, ab sit accusantium, pariatur hic voluptas, ex libero consectetur temporibus assumenda inventore incidunt id aspernatur earum atque expedita fugit. Possimus, voluptate. Magni?</div>
        </div>
      </div>
    </>
  )
}

export default Footer