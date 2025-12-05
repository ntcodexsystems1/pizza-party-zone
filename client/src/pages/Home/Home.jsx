import React from 'react'
import Button from '../../components/ui/Button'
import hero2 from '../../assets/images/hero2.png'
import logo from '../../assets/images/logo.png'
import hero1 from '../../assets/images/hero1.png'
import MobileHero from '../../assets/images/mobileHero.png'


const Home = () => {
  return (


<section className={`  w-full h-screen bg-white `}>


<div className=''>

<div className='fixed -top-10 -right-20  '>
<img src={hero1} alt="" className='object-cover  h-40 w-40'/>
</div>



<div className=' w-full grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-10 pt-12 md:pt-0  '>

<div className=' h-auto md:order-1 order-2 '>
    <img src={hero2} alt="" className='w-full  object-cover md:flex hidden h-full '/>
        <img src={MobileHero} alt="" className='w-full h-full object-cover flex md:hidden '/>

</div>

<div className=' items-center w-full lg:px-12 md:px-4  px-4 flex  justify-center  md:order-2 order-1 '>


<div className='flex flex-col gap-6  h-full md:justify-center justify-center  items-center lg:pe-20 md:items-start text-center  md:text-start'>

<div className='flex justify-center items-center flex-col w-16'>
  <img src={logo} alt="" className='object-cover w-full h-16 rounded'/>
    <i className='capitalize text-[8px] font-bold '>pizza party zone</i>
</div>

<p className='text-4xl md:text-[40px] lg:text-5xl font-extrabold md:leading-tight lg:leading-tight'> Fresh Ingredients.<i className='text-[#FF3F3F]'>  Real Pizza.
</i> </p>

<h1 className='md:text-18 text-base font-normal text-'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate esse laboriosam facilis voluptatum ad ex enim, </h1>

<Button/>


</div>






</div>


</div>
</div>




</section>


  )
}

export default Home