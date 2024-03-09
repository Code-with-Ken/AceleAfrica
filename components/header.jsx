import React from 'react'
import Image from 'next/image'
const Header = ({src, alt, title, subtitle}) => {
  return (
    <div>

        <header>
        <div className="overflow-hidden bg-green-400 lg:h-96">
          <Image src={src} width={1200} height={0} alt={alt} />
        </div>
      </header>
      <div className="relative pt-3 mx-6 text-center -translate-y-16 bg-white rounded-lg lg:-translate-y-32 lg:mx-12">
        <h1 className="text-3xl font-bold lg:text-5xl">{title}</h1>
        <p className="pb-3 text-sm font-medium lg:pb-7 lg:font-semibold lg:text-base">{subtitle}</p>
      </div>
    </div>
  )
}

export default Header