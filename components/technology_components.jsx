import React from 'react'
import Image from 'next/image'
const Technology_components = ({src, title, description}) => {
  return (
    <div className="flex flex-col items-center hidden px-2 bg-white rounded-lg py-7">
        <Image src={src} width={20} height={0} />
        <p className="py-3 text-sm font-semibold md:font-bold " >{title}</p>
        <p className="text-xs md:text-sm ">{description}</p>
    </div>
  )
}

export default Technology_components