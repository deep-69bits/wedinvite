import React from 'react'

const Video = () => {
  return (
    <div>
       <video className='m-auto w-full lg:h-[700px]   sm:w-full lg:mt-20 mt-0' autoPlay loop  src="https://cdn.videvo.net/videvo_files/video/free/2022-11/large_watermarked/221028_03_Colouring%20Pencils_4k_006_preview.mp4"></video>
       <div className='text-center flex justify-center items-center'>
       <button className='transition-all duration-500 hover:scale-125 text-4xl rounded-full m-auto  h-14 w-14 translate-y-[-20px] bg-pink-500 text-white'>	&darr; </button>
       </div>
    </div>
  )
}

export default Video