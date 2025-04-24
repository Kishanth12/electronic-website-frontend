import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Register from './pages/Register'
import Orders from './pages/Orders'
import About from './pages/About'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  return (
    <div className='px-4 sm:px-[5w] md:px-[7w] lg:px-[9vw]' >
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeOrder' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/register' element={<Register/>} />
        
      </Routes>
      <Footer/>
   
  </div>
  )
}

export default App