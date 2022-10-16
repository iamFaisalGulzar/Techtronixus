import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className='lg:h-[112px] left-0 right-0 pb-6 h-auto w-full  bottom-0 bg-[#3D3474] lg:mt-10  px-11 pt-4 grid grid-cols-1 lg:grid-cols-5 gap-2  container  items-center content-center justify-center'>

      <div className=' flex w-[150px] h-[65[x]]'>
        
      <Image src="/images/logo/footer.png" width={150} height={65} alt="Evolov" className='block'/>
      
      </div>

      <div className='grid items-center justify-center w-48 font-thin text-white lg:grid-cols-2'>
        <div className='cursor-pointer'>About us</div>
        <div className='cursor-pointer'>Policy</div>
        <div className='cursor-pointer'>Contact us</div>
        <div className='cursor-pointer'>News</div>
      </div>

      <div className='flex-col w-96'>
        <div className='font-semibold text-white flex'>
          Join a Newsletter
          <div className='text-white flex-end ml-11 items-end right-0 font-[100] text-sm text-end'>
          Get amazing offers
        </div>
        </div>
        <div className='flex'>
          <input type="text"  className='w-80 bg-[#3D3474] border border-white p-1 rounded-full mt-1 outline-none text-white ring-blue-500 place-content-evenly' placeholder='Enter your email'/>
          <button className='bg-white rounded-full px-2 text-[#3D3474] font-semibold ml-3'>
            Subscribe
          </button>
        </div>

        <div>
          icons
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Footer