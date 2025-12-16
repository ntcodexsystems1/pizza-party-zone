import React from 'react'
import logo from '../../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
 
 
  return (
   
   
   <>
  
   {/* header section */}
       
     <header className=' w-full h-auto py-2 px-4 md:px-8 lg:px-24 border-b-2'>
   
   
   <div className=' m-auto container sm:grid grid-cols-2 flex gap-4 '>
   
   
   <div className=' w-auto h-auto    flex justify-center sm:justify-start sm:items-start  flex-col items-center '>
     
     <img src={logo} alt="" className='  sm:w-16 object-cover sm:h-16 w-full h-12 rounded'/>
     <p className='capitalize text-[4px] sm:text-[8px] font-bold'>pizza party zone</p>
   
   </div>
   
   <div className=' flex justify-end items-center w-full'>
   
     <div className=' sm:w-[80%] h-10 flex w-full'>
   
     <input type="text" className='w-full  h-full border rounded  px-4 text-sm' placeholder='Search fav pizza'/>
   
     <button className=' h-full px-4 bg-sky-300 rounded-r'>
   <CiSearch className='text-xl '/>
     </button>
   
     </div>
   
   </div>
   
   
   </div>
   
   
   
     </header>
   
    </>
   
   
  )
}

export default Navbar