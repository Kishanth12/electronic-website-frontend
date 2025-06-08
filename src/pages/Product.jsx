import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import ProductReviews from '../components/ProductReviews';


const Product = () => {
  const {productId} = useParams();
  const {products ,currency,addToCart} = useContext(ShopContext)
  const [productData,setProductData] = useState(null)
  const [image ,setImage]= useState('')
  const [size,setSize]=useState('')

  
  useEffect(() => {
    if (products.length > 0) { 
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      } else {
        setProductData("not-found");
      }
    }
  }, [productId, products]); //useEffect depends on `productId` & `products`

  if (productData === "not-found") {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row' >
        {/* product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((img,index)=>(
                <img onClick={()=>{setImage(img)}} src={img} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }

           </div>
           <div className='w-full sm:w-[80%]'>
           <img src={image} className='w-72 h-auto' alt="" />
           </div>
        </div>
        {/* product information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            {productData.reviews && <p className='pl-2'>({productData.reviews.length})</p>}
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray w-4/5 '>{productData.description}</p>
          <p className='mt-5 text-sm text-gray-950 font-semibold' >{productData.features.map((feature,id) => (<li key={id}>{feature}</li>))}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
               <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${ item=== size ? 'border-orange-500':""}`} key={index}>{item}</button>
              ))}

            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' onClick={()=>{addToCart(productData._id,size)}}>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original product</p>
          <p> Cash on delivery only available</p>
          <p>Easy return and Exchange policy within 7 Days  </p>
        </div>
        </div>
      </div>
      {/* Description and Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          {productData.reviews && productData.reviews.length > 0 && (
           <p className='border px-5 py-3 text-sm'>
            Reviews ({productData.reviews.length})
      </p>
    )}
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
           {productData.reviews && productData.reviews.length > 0 && (
      <div>
        <h3 className="font-semibold text-black mt-4 mb-2">Customer Reviews</h3>
        <ProductReviews reviews={productData.reviews} />
      </div>
    )}
         
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts  id={productData._id} category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ):<div className='opacity-0'></div>
}


export default Product