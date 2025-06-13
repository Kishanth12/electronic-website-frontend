import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItems from '../components/ProductItems';


const Collection = () => {
  const {products,search,showSearch,categories,brands}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const[filterProducts,setFilterProducts]= useState([]);
  const[category,setCategory] =useState([]);
  const[brand,setBrand] =useState([]);
  const[sortType,setSortType] =useState('relevant')

  const toggleCategory =(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev =>[...prev,e.target.value])
    }

  }

 

  const toggleBrand=(e)=>{
    if(brand.includes(e.target.value)){
      setBrand(prev => prev.filter(item => item !== e.target.value)) // remove if it is already checked
    }else{
      setBrand(prev =>[...prev,e.target.value])
    }

  }
  const applyFilter=()=>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy =productsCopy.filter(item => category.includes(item.category._id.toString()))
    }
    
    if(brand.length > 0){
      productsCopy =productsCopy.filter(item =>  brand.includes(item.brand._id.toString()))
    }

    setFilterProducts(productsCopy);

  }

   const sortProducts =()=>{
     let filterProductsCopy =[...filterProducts];
     switch(sortType){
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price - a.price)))
        break;

      case 'Top-Rated':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(b.avgRating -a.avgRating)))
        break;  
      default:
        applyFilter();
        break;    
     }
   }

  // useEffect(()=>{
  //   setFilterProducts(products)
  // },[products])

  useEffect(()=>{
    applyFilter(); 
  },[category,brand,search,showSearch,products])
  
   useEffect(()=>{
    sortProducts(); 
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
      Select Items
      <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' :''}`} src={assets.dropdown_icon} alt="" />
        </p>
       
        {/*Category */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>Category</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {categories.map((category)=>(
               <p key={category._id} className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleCategory} value={category._id}/>{category.name}
            </p>
            ))}
          </div>
        </div>
         {/* brand*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>Brands</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {brands.map((brand)=>(
              <p key={brand._id} className='flex gap-2'>
              <input type='checkbox' className='w-3' value={brand._id} onChange={toggleBrand}/>{brand.name}
            </p>
            ))
            }
          </div>
        </div>
      </div>
      {/* Right site */}
      <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-14'>
        <Title text1={'All'} text2={'Collections'}/>
        {/* Products Sort */}
        <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
          <option value='relevant'>Sort by:Relevant</option>
          <option value='low-high'>Sort by: Low to HighPrice</option>
          <option value='high-low'>Sort by: High to LowPrice</option>
          <option value='Top-Rated'>Sort by: Top Rated</option>
        </select>
      </div>
      {/* map products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
        {
          filterProducts.map((item,id)=>(
            <ProductItems key={id} name={item.name} id={item._id} price={item.price} image={item.image} ratings={item.avgRating}/>
          ))
        }

      </div>
      </div>

    </div>
  )
}

export default Collection