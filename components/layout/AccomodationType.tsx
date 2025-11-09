import React from 'react'
import Image from 'next/image'



const AccomodationType = ({image, title}: {image: string, title: string}) => {
  return (
    <div className=' flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition transform duration-200 ease-out '>
      <Image src={image} alt={title} width={34} height={34} className=' w-9 h-auto ' />
      <p className=' text-center text-sm font-medium mt-4 text-[#616161] '>{title}</p>
    </div>

  )
}

export default AccomodationType