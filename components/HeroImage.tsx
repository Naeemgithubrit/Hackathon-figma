import Image from 'next/image'
import React from 'react'

export default function HeroImage() {
  return (
    <>
<div className='container  w-full'>
<Image
src={'/images/hero-image.png'}
alt='hero-image'
width={3000}
height={3000}
className='w-full  h-full'/>
</div>

    </>
  )
}
