import React from 'react'
import Navbar from '../components/common/Navbar'

const MainLayout = ({children}) => {
  return (
   
   
    <>
    
<Navbar/>


<div>
    {children}
</div>




    </>
   


  )
}

export default MainLayout