import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from './../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
    const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products} = useContext(ShopContext);


  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    province:'',
    district:'',
    zipcode:'',
    phone:'',
  })

  const onChangeHandler =(e)=>{
     const name =e.target.name;
     const value = e.target.value

     setFormData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async(e)=>{
     e.preventDefault();
     try {
      let orderItems=[]
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product =>product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity =cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount()+ delivery_fee
      }

      const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
      if(response.data.success){
        setCartItems({})
        navigate('/orders')
      }
      else{
        toast.error(response.data.message)
      }
     } catch (error) {
      console.log(error)
      toast.error(error.message)
     }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min:h-[80vh] border-top'>
      {/* left site */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input required type='text' onChange={onChangeHandler} name='firstName' placeholder='First Name' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
          <input required type='text' onChange={onChangeHandler} name='lastName' placeholder='Last Name' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
        </div>
        <input required type='email' onChange={onChangeHandler} name='email' placeholder='Email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
        <input required type='text' onChange={onChangeHandler} name='street' placeholder='Street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
        <div className='flex gap-3'>
          <input required type='text' onChange={onChangeHandler} name='province' placeholder='Province' value={formData.province} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
          <input required type='text' onChange={onChangeHandler} name='district' placeholder='District'value={formData.district} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
        </div>
        <div className='flex gap-3'>
          <input required type='number' onChange={onChangeHandler} name='zipcode' placeholder='ZipCode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
          {/* <input required type='text' placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3 w-full'/> */}
        </div>
        <input required type='number' onChange={onChangeHandler} name='phone' placeholder='PhoneNumber' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3 w-full'/>
      </div>

      {/* right site */}
      <div className='mt-8'>
       <div className='mt-8 min-w-80'>
        <CartTotal/>
       </div>
       <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className='text-gray-800 text-sm font-bold mx-4'>CASH ON DELIVERY</p>
          </div>

        </div>
        <div className='w-full text-end mt-8'>
        <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
      </div>
       </div>
      </form>
    
  )
}

export default PlaceOrder