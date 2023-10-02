"use client"
import Image from 'next/image'
import  CustomButton from './CustomButton'
const Hero = () => {
    const handleScroll = () => {
        console.log('click')
    }
  return (
    <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
           Wellcome To <span className="text-primary-blue">Toko Informatika</span>
        </h1>
        <p className="hero_subtitle">
        Toko Informatika is the ultimate destination for high-quality UMKM (Micro, Small, and Medium Enterprises) fashion from Bandung,
        <br></br>
        featuring the latest IT-inspired designs. Here, you can discover top-notch products that reflect the creativity of local entrepreneurs. 
        <br></br>
        'Toko Informatika not only offers  <span className="text-primary-blue">innovative styles but also supports the economic growth of Bandung. </span>
        <br></br>
        Explore a range of unique clothing options with the latest designs and be part of the movement to support Bandung's UMKM sector.
        </p>
        <CustomButton 
        title="Explore Thsirt"
        containerStyles="bg-primary-blue
        text-white rounded-full mt-10"
        handleClick={handleScroll}/>
        <div className='hero__image-container'>
            <div className='hero__image'>
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
            <div className="hero__image-overlay"/>
    </div>
    </div>
  )
}

export default Hero