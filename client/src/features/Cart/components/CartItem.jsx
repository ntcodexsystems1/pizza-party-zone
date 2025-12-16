import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { CartContext } from '../../../app/contextApi/CartContext';


const CartItem = () => {

  const { cartItem, removeItem } = useContext(CartContext);


  return (

    <>






      {/* Cart Items */}

      {

        cartItem.length > 0 ? (

          <div className='border-slate-300 border p-4 lg:w-[70%] md:w-[60%] xl:w-[60%] rounded-xl flex flex-col overflow-auto bg-white'>
            {cartItem.map(item => (
              <div className='flex justify-between relative  sm:grid grid-cols-3 flex-wrap gap-4 py-2  items-center border-b-2' key={item.id}>
                <div className='w-[40%] sm:w-auto bg-slate-300'>
                  <div className='md:w-20 md:h-20 w-12 h-12'> </div>
                </div>


                <div className='flex flex-col justify-start sm:w-auto w-[60%]'>

                  { item.size && (
                    <div className='bg-[#BFE18B] text-xs w-auto flex justify-center capitalize items-center absolute right-0 sm:top-0 top-4 p-1'>
                      {item.size}
                    </div>)}

                  <p className='md:text-base text-sm font-bold text-[#3A3636] uppercase'>{item.name}</p>
                  <p className='text-sm text-[#3A3636]'>{item.description}</p>
                  <p className='pt-2 text-base font-bold'>{item.price} ₹</p>
                </div>
                    

                <div className='flex justify-end items-center'>
                  <MdDelete className='text-2xl cursor-pointer' onClick={() => removeItem(item.id)} />
                </div>
              </div>
            ))}
          </div>
        ) : (<h1 className='text-center  rounded-xl capitalize text-slate-700 py-4 md:w-full'>cart is empty</h1>)


      }


    </>


  )
}

export default CartItem