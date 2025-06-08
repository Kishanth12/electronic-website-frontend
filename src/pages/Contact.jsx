import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [image,setImage]=useState('');

  return (
    <div>
        {<img src={image} alt="Selected" className="w-32 h-32 mb-4" />} 
      <div>
        <button onClick={()=>setImage('/assets.logoo.png')}>logo</button>
        {/* <button onClick={()=>setImage(assets.bin_icon)}>bin</button>//front */}
      </div>
    </div>
  )
}

export default Contact 