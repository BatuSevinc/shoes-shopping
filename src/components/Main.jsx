import React, { useState } from 'react'
import { BestSeller, Colors, Eb_main, Ek_main, GiTargetArrows, MdOutlineSentimentVerySatisfied, Es_main, Header_main, Kk_main, Ks_main, Ozguntasarim, TbPhoneCall, SiFastapi } from '../assets'

const Main = () => {

  const [hover,setHover] = useState(0)

  const handleMouseEnter = (imageId) => {
    setHover(imageId);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className='grid grid-cols-12 grid-rows-10 gap-4 h-[90vh] container mx-auto'>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
        <img src={BestSeller} alt="" className='w-full h-full object-cover'/>
        {
          hover === 1 &&
          <div className="hover text-white top-[45%] left-[35%] absolute font-rubik-lines uppercase">
            Çok Satanlar
          </div>
        }
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-6' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
      <img src={Header_main} alt="" className='w-full h-full object-fill' />
      {
          hover === 2 &&
          <div className="hover text-white top-[48%] left-[35%] absolute font-rubik-lines uppercase">
            Tüm Kategoriler
          </div>
        }
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
        <img src={Eb_main} alt="" className='w-full h-full object-cover' />
        {
          hover === 3 &&
          <div className="hover text-white top-[48%] left-[35%] absolute font-rubik-lines uppercase">
            erkek botlar
          </div>
        }
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
        <img src={Ek_main} alt="" className='w-full h-full object-cover' />
        {
          hover === 4 &&
          <div className="hover text-white top-[48%] left-[35%] absolute font-rubik-lines uppercase">
            erkek klasik
          </div>
        }
      </div>
      <div className='main-box-shadow relative order-1 lg:order-[0] cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
        <img src={Es_main} alt="" className='w-full h-full object-cover' />
        {
          hover === 5 &&
          <div className="hover text-white top-[48%] left-[38%] absolute font-rubik-lines uppercase">
            erkek spor
          </div>
        }
      </div>
      <div className='col-span-12 md:flex items-center justify-around row-span-1'>
          <div className='text-center'>
          <p className='font-dancing-script flex items-center justify-center gap-2 font-bold tracking-[3px]'><GiTargetArrows/> Gerçek Kalite</p>
          <small className='font-dm-sans text-xs'> Kumaşlarımız 100% deriden üretilir.</small>
          </div>
          <div className='text-center'>
          <p className='font-dancing-script flex items-center justify-center gap-2 font-bold tracking-[3px]'><MdOutlineSentimentVerySatisfied/> Müşteri Memnuniyeti</p>
          <small className='font-dm-sans text-xs'>100% Müşteri Memnuniyeti</small>
          </div>
          <div className='text-center'>
          <p className='font-dancing-script flex items-center justify-center gap-2 font-bold tracking-[3px]'><SiFastapi/> Anında Teslimat</p>
          <small className='font-dm-sans text-xs'>Aynı İş Günü İçerisinde Teslimat</small>
          </div>
          <div className='text-center'>
          <p className='font-dancing-script flex items-center justify-center gap-2 font-bold tracking-[3px]'><TbPhoneCall /> Online Destek</p>
          <small className='font-dm-sans text-xs'>7/24 Canlı Destek</small>
          </div>
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
      <img src={Colors} alt="" className='w-full h-full object-fill' />
      {
          hover === 6 &&
          <div className="hover text-white top-[48%] left-[38%] md:left-[35%] absolute font-rubik-lines uppercase">
            Rengarenk
          </div>
        }
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-2 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
        <img src={Kk_main} alt="" className='w-full h-full object-fill' />
        {
          hover === 7 &&
          <div className="hover text-white top-[48%] left-[38%] md:left-[36%] lg:left-[30%] absolute font-rubik-lines uppercase">
            kadın klasik
          </div>
        }
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-2 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
        <img src={Ks_main} alt="" className='w-full h-full object-fill' />
        {
          hover === 8 &&
          <div className="hover text-white top-[48%] left-[38%] md:left-[36%] lg:left-[30%] absolute font-rubik-lines uppercase">
            kadın spor
          </div>
        }
      </div>
      <div className='main-box-shadow relative cursor-pointer col-span-12 md:col-span-6 lg:col-span-4 row-span-12 lg:row-span-3' onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={handleMouseLeave}>
        <img src={Ozguntasarim} alt="" className='w-full h-full object-fill' />
        {
          hover === 9 &&
          <div className="hover text-white top-[48%] left-[32%] absolute font-rubik-lines uppercase">
            özenle tasarlanmış
          </div>
        }
      </div>
    </div>
  )
}

export default Main