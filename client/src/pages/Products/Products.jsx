import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import ProductList from '../../features/products/components/ProductList';
import Hero from '../../features/products/components/Hero';




const Products = () => {



  return (

    <div>


      <MainLayout />

      {/* hero section  */}

   <Hero    
   />

      {/* products - card section */}

<ProductList/>
     



    </div>



  )
}

export default Products