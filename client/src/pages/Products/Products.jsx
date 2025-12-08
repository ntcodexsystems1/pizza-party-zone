import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import ProductList from '../../features/products/components/ProductList';
import Hero from '../../features/products/components/Hero';




const Products = () => {

 const [select, setSelected] = useState("veg")


  return (

    <div>


      <MainLayout />

      {/* hero section  */}

   <Hero 

   select={select}
   onSelected={setSelected}
   
   />

      {/* products - card section */}

<ProductList cat={select}/>
     



    </div>



  )
}

export default Products