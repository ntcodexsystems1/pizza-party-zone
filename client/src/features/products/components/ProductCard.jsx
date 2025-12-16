import React from 'react'
import { NavLink } from 'react-router-dom';




const ProductCard = ({dish,addItem}) => {



  return (
   
        
               <div className='border flex justify-between items-center gap-4 p-4 py-8 rounded-xl border-[#cfcaca] relative' key={dish.id}  onClick={() => addItem(dish)} >

{
  dish.size && (
  <div className='bg-[#BFE18B] text-xs w-auto flex justify-center capitalize items-center absolute right-2 top-2 p-1'>
                      {dish.size}
                    </div> )
}
                  


                    <div className='border rounded-full h-20 w-20 bg-slate-300'>
                    </div>

                    <div className='w-full flex flex-col gap-2 '>
                      <div className='pt-1'>
                        <p className='font-bold text-[#3A3636] text-xs xl:text-base uppercase'>{dish.name}</p>

                        {

                          dish.description && (
                        <p className='text-xs md:text-sm text-[#3A3636] pt-1'>{dish.description}</p>
                          )
                        }
                      </div>


                      <div className='flex gap-4 capitalize items-center'>
                        <NavLink className="md:w-20 w-16 md:h-9 h-8 md:text-base text-sm bg-btnBg justify-center rounded-[8px] items-center flex text-white font-bold" to="/Cart">
                          add +
                        </NavLink>
                        <p className='font-bold md:text-base text-sm'>{dish.price} ₹</p>
                      </div>
                    </div>
                  </div>



  )
}

export default ProductCard