import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Products from '../../pages/Products/Products'
import Cart from '../../pages/Cart/Cart'




const AppRouter = () => {



  return (


    <Routes>


      <Route path='/' element={<Home />} />

      <Route path='/Products' element={
        <Products />} />


      <Route path='/Cart' element={<Cart />} />






    </Routes>





  )
}

export default AppRouter