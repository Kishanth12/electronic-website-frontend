import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from  'react-router-dom'

export const ShopContext = createContext(); // shared state container that allows you to Access and use any shared data or functions 

const ShopContextProvider =(props)=>{  //the component that stores and provides that data
    const currency ='$';
    const delivery_fee =10;
    const[search,setSearch] = useState('');
    const[showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();
    
 const addToCart=(itemId,size)=>{ // Adds an item to the cart with a selected size. store data in object
   if(!size){
      toast.error('Select Product Size')
      return;
   }
    let cartData = structuredClone(cartItems)

    if(cartData[itemId]){
      if(cartData[itemId][size]){
         cartData[itemId][size] += 1;
      }else{
         cartData[itemId][size]=+1;
      }
    }else{
      cartData[itemId]={};
      cartData[itemId][size] =1;
    }
    setCartItems(cartData)
 }

 const getCartCount =()=>{
   let totalCount = 0;

   for(const items in cartItems){
      for(const size in cartItems[items]){     //cartItems["product123"] = { "M": 2, "L": 1 }
         try{
            if(cartItems[items][size] > 0){    //cartItems[items][size] = cartItems["product123"]["M"] = 2
               totalCount += cartItems[items][size];
            }
         }catch(error){

         }
      }
   }
   return totalCount;
 }

 const updateQuantity=(itemId,size,quantity)=>{
    
   let cartData = structuredClone(cartItems);

   cartData[itemId][size]= quantity;
   setCartItems(cartData)

 }
 const getCartAmount =()=>{
   let totalAmount =0;

   for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items);
         for(const size in cartItems[items]){
            try {
               if(cartItems[items][size]>0){
                  totalAmount += itemInfo.price * cartItems[items][size]
               }
            } catch (error) {
               
            }
         }
      }
      return totalAmount;
   }

 

 
 const value ={
    products,currency,delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItems,addToCart,
    getCartCount,updateQuantity,
    getCartAmount,
    navigate
 }


 return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
 )
}


export default ShopContextProvider;