import React, { useState } from 'react'
import { GrBasket, IoClose, Logo, RiSecurePaymentFill, RxHamburgerMenu } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [mobilMenu,setMobilMenu] = useState(false)

  return (
    <div className="relative h-[10vh] bg-grey px-2 md:px-8 flex justify-between items-center">
     <>
      <img src={Logo} alt="logo" width={80}/>
     </>
     <div className='hidden md:flex gap-5'>
      <Link className='hover:font-bold transition-all duration-100 hover:text-gray-700'>Anasayfa</Link>
      <Link className='hover:font-bold transition-all duration-100 hover:text-gray-700'>Ürünlerimiz</Link>
      <Link className='hover:font-bold transition-all duration-100 hover:text-gray-700'>Hakkımızda</Link>
      <Link className='hover:font-bold transition-all duration-100 hover:text-gray-700'>İletişim</Link>
      <Link className='flex items-center'><RiSecurePaymentFill/></Link>
      <Link className='flex items-center rotate-[10deg]'><GrBasket/></Link>
     </div>
     <div className='flex md:hidden'>
      <RxHamburgerMenu size={24} className='cursor-pointer' onClick={() => setMobilMenu(true)}/>
     </div>
      <div className={`fixed duration-700 transition-all ${mobilMenu ? "translate-x-0" : "translate-x-[3150px]"} bg-grey h-screen w-screen inset-0`}>
        <div className='flex w-full p-5 justify-end'>
        <IoClose size={25} className='cursor-pointer' onClick={() => setMobilMenu(false)}/>
        </div>
        <div className='flex flex-col h-full justify-center -mt-8 font-bold w-full items-center gap-16'>
        <Link className='transition-all duration-100 hover:text-gray-700'>Anasayfa</Link>
      <Link className='transition-all duration-100 hover:text-gray-700'>Ürünlerimiz</Link>
      <Link className='transition-all duration-100 hover:text-gray-700'>Hakkımızda</Link>
      <Link className='transition-all duration-100 hover:text-gray-700'>İletişim</Link>
      <Link className='flex gap-2 items-center transition-all duration-100 hover:text-gray-700'><RiSecurePaymentFill size={22}/> Ödeme Yöntemleri</Link>
      <Link className='flex gap-2 items-center transition-all duration-100 hover:text-gray-700'><GrBasket className='mb-1' size={22}/>Sepetim</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar