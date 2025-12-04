import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBowlFood } from "react-icons/fa6";


const Button = () => {
  return (
   
   <div>


<NavLink className="bg-[#FF3F3F] gap-2 rounded-2xl flex justify-center items-center w-[200px] h-12 text-white capitalize font-bold">

order now <FaBowlFood />


</NavLink>


    </div> 
  )
}

export default Button