import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ProductList from '../../features/components/ProductList';




const Products = () => {



  return (

    <div>


      <MainLayout />

      {/* hero section  */}

      <section className=' py-12 px-4 md:px-8 md:py-[72px] lg:px-24 lg:py-12 bg-primary'>

        <div className=' mx-auto container grid sm:grid-cols-2 grid-cols-1 items-center gap-8 md:gap-10 lg:gap-12   '>

          <div className=' flex flex-col justify-center sm:gap-8 md:gap-9 gap-7 '>

            <div className='border-b-2 pb-4 lg:pb-8 w-fit flex justify-center items-center  mx-auto sm:mx-0'>
              <p className='lg:text-5xl md:text-[40px] text-[32px] font-extrabold text-center'>
                Explore <span className='text-white'>pizzas</span>
              </p>
            </div>



            <div>

              <ul className='capitalize flex gap-4 justify-center sm:justify-start'>

                <li className='w-40 sm:h-12 h-10 text-sm sm:text-base font-bold   flex justify-center text-white items-center rounded-xl bg-secondary '>
                  <NavLink>veg pizzas</NavLink>
                </li>

                <li className='w-40 sm:h-12 h-10 text-sm sm:text-base bg-btnBg font-bold text-white rounded-xl flex justify-center items-center'>
                  <NavLink>non-veg pizzas</NavLink>

                </li>

              </ul>

            </div>

          </div>

          <div className=' sm:text-end text-center flex sm:justify-end justify-center'>
            <h1 className='w-[396px] '>Customers love our tasty, fresh, and delicious pizza prepared with the finest ingredients.</h1>
          </div>


        </div>


      </section>


      {/* products - card section */}

<ProductList/>
     
















    </div>



  )
}

export default Products