import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../app/contextApi/CartContext';
import CartItem from '../../features/Cart/components/CartItem';
import CartSummary from '../../features/Cart/components/CartSummary';
import { FaArrowRightLong } from "react-icons/fa6";




const Cart = () => {

  const { cartItem } = useContext(CartContext);
  const [name, setName] = useState("");
  const [deliveryType, setDeliveryType] = useState("home"); // "home" or "dinein"
  const [tableNo, setTableNo] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");





  return (
   
   <section className='flex justify-center border items-start px-4 md:px-8 py-8 lg:px-24 md:py-6 lg:h-screen  bg-green-100'>
      <div className='mx-auto container flex flex-col gap-6 md:gap-8 lg:gap-10 h-auto lg:h-[80%]'>

        {/* Heading */}
        <div className='grid grid-cols-2 items-center '>

          <div className='border-b-2 border-[#0BCBD1] w-fit lg:pb-4 pb-4'>
  <h1 className='lg:text-4xl md:text-[30px] text-[22px] capitalize font-bold'>
            my <span className='text-[#0BCBD1]'>cart</span>
          </h1>
          </div>
        
         <div>

          <NavLink to="/Products" className=' grid grid-cols-[auto_auto] gap-2 justify-end items-center cusror-pointer'>
  <FaArrowRightLong /> <span className='font-bold md:text-base text-sm '>
More Order</span>
          </NavLink>
       

         </div>
        </div>

        <div className='flex gap-6 h-full flex-col  md:flex-row bg-green-100' >




          <CartItem />


          {

            cartItem.length > 0 ? (

            <CartSummary deliveryType ={deliveryType}   setDeliveryType={setDeliveryType}  setTableNo={setTableNo} tableNo={tableNo} setAddress={setAddress} setMobile={setMobile} address={address} mobile={mobile} name={name} setName={setName} />

            

            ) : (

              <NavLink
                to="/Products"
                className="bg-[#0BCBD1] md:w-[220px] w-full capitalize   h-12 rounded flex justify-center items-center text-black font-medium"
              >
                Go for order
              </NavLink>
        
            )
          }


        </div>

      </div>

    </section>
  );
};

export default Cart;
