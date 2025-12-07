import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Products from '../../pages/Products/Products'
const AppRouter = () => {
  return (
   
    
       <Routes>


<Route path='/' element={<Home/>}/>
<Route path='Products' element={<Products/>}/>



   </Routes>
   


  )
}

export default AppRouter