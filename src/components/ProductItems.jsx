import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import { assets } from '../assets/assets'

const ProductItems = ({id,image,name,price,ratings}) => {
    const {currency}=useContext(ShopContext)
  return (
  
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden p-2' >
            <img src={image[0]} className='hover:scale-110 transition ease-in-out  h-40' alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
       <div className={`flex gap-1 items-center w-10 h-5 rounded-sm ${ratings >= 4 ? 'bg-green-400' : 'bg-red-400'}`}
        ><img className='w-3 h-3' src={assets.star_icon} alt="" /><p className='text-xs font-bold'>{ratings}</p></div>
    </Link>
  )
}

export default ProductItems