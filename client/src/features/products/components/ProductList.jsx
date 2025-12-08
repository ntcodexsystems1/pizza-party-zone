import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../../../app/contextApi/CartContext';
import { useContext } from 'react';

const ProductList = ({cat}) => {
  
    const [cardData, setCard] = useState([]);
  
  
    // all dishes display logic below

    useEffect(() => {
  
      const fetchData = async () => {
  
        try {
  
          const res = await axios.get('/assets/data.json');
          // Transform data: keep the category title and attach it to each dish
          const allDishes = res.data[cat].section.map((item) => (

{
title:item.title,
DishItem:item.DishItem
}


          ))


          setCard(allDishes);
  
        }
  
        catch (error) {
          console.error("Error fetching card data:", error);
  
  
        }
      };
  
      fetchData();
  
    }, [cat])
  
  
// add item in cart 

    const {addItem} = useContext(CartContext)

  


    return (
    

 <section className=' py-12 px-4 md:px-8 md:py-[72px] lg:px-24 lg:py-12 bg-white'>
      
        <div className='mx-auto container grid grid-cols-1 sm:gap-8 md:gap-9 gap-7'>
          {cardData.map((section) => (
            <div className=' grid grid-cols-1 gap-6' key={section.id}>
              <div>
                <span className='bg-[#E6D2D2] text-xs font-bold p-2'>
                  {section.title}
                </span>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {section.DishItem.map((dish) => (
               
               <ProductCard dish={dish}  addItem={addItem} />

                ))}
              </div>
            </div>
          ))}
        </div>
        
      </section>


  )
}

export default ProductList