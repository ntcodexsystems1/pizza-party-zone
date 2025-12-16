
import React, { useCallback, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import axios from 'axios'

const CartProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([])

    // all dishes display logic below

    const [cardData, setCard] = useState([]);

 const [select, setSelected] = useState("veg")
  const [topping, setTopping] = useState([])


useEffect(() => {


 const fetchStarters = async () => {
      const res = await axios.get('/assets/data.json');
      setTopping(res.data.toppings.section);
    };
    fetchStarters();


}, [])


    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await axios.get('/assets/data.json');
                // Transform data: keep the category title and attach it to each dish
                const allDishes = res.data[select].section.map((item) => (

                    {
                        title: item.title,
                        DishItem: item.DishItem
                    }


                ))


                setCard(allDishes);

            }

            catch (error) {
                console.error("Error fetching card data:", error);


            }
        };

        fetchData();

    }, [select])

    const addItem = useCallback((newItem) => {

        setCartItem(preItem => [...preItem, newItem]);

    }, []);


    //   get item stored in browser
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cartItem"))
        setCartItem(saved || [])   // prevents null
    }, [])




    //  set item stored in browser
    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItem))
    }, [cartItem])




    // Remove item by index (or id)
    const removeItem = useCallback((itemId) => {
        setCartItem(prevItem => prevItem.filter(item => item.id !== itemId));
    }, []);




    return (


        <CartContext.Provider value={{ addItem, cartItem, removeItem, cardData, setSelected, select, setTopping, topping }}>

            {children}

        </CartContext.Provider>


    )
}

export default CartProvider