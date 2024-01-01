import React from 'react'
import { Link } from 'react-router-dom'

const ProductsFilter = () => {
  return (
    <div className='flex text-sm justify-center gap-4 flex-wrap'>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>çok satanlar</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>tüm Kategoriler</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>erkek botlar</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>erkek klasik</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>rengarenk</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>kadın klasik</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>kadın spor</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>özenle tasarlanmış</Link>
      <Link className='uppercase text-center font-rubik-lines transition-all duration-300 rounded-sm border-2 border-[#797777] p-1 hover:bg-[#797777] hover:text-white cursor-pointer'>erkek spor</Link>
    </div>
  )
}

export default ProductsFilter