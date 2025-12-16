import React, { useContext, useState } from 'react'
import { CartContext } from '../../../app/contextApi/CartContext'
import { MdDeliveryDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import ProductCard from '../../products/components/ProductCard';

const CartSummary = ({ deliveryType, setDeliveryType, mobile, name, setName, setMobile, setTableNo, tableNo, setAddress, address }) => {

    const { cartItem, topping, addItem } = useContext(CartContext)

    // whatsapp billing data push on whatsapp business api

    const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    const tax = totalPrice * 0.05
    const finalTotal = totalPrice + tax;
    const finalBill = Math.ceil(finalTotal);
    const cartLength = cartItem.length;


    const sendOrderWhatsApp = () => {

        if (!name || (deliveryType === "dinein" && !tableNo) || (deliveryType === "home" && (!address || !mobile))) {
            alert("Please fill all required fields!");
            return;
        }




        // Get current date and time
        const now = new Date();
        const date = now.toLocaleDateString(); // e.g., 10/12/2025
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // e.g., 14:35

        // Build GST invoice message
        let invoice = `🏷️ *Pizza Party Zone*\n`;
        invoice += `*GST Invoice*\n`;
        invoice += `GST No: 10BWNPA9823M1ZD\n`; // <-- Added GST number

        invoice += `Date: ${date}  |  Time: ${time}\n\n`;

        invoice += `*Customer Details:*\n`;
        invoice += `Name: ${name}\n`;
        if (deliveryType === "dinein") {
            invoice += `Table No: ${tableNo}\n\n`;
        } else {
            invoice += `Address: ${address}\n`;
            invoice += `Mobile: ${mobile}\n\n`;
        }

        invoice += `*Order Details:*\n`;
        invoice += `Total Items: ${cartLength}\n`;
        invoice += `-----------------------------------\n`;

        cartItem.forEach((item, index) => {
            invoice += `${index + 1}. ${item.name} (${item.size})\n`;
            invoice += `Description: ${item.description}\n`;
            invoice += `Price: ${item.price.toFixed(2)}₹\n`;
            invoice += `\n`;

        });


        invoice += `-----------------------------------\n`;
        invoice += `Subtotal: ${totalPrice.toFixed(2)}₹\n`;
        invoice += `GST (5%): ${tax.toFixed(2)}₹\n`;
        invoice += `*Total Amount (Gross): ${finalBill.toFixed(2)}₹*\n`;
        invoice += `-----------------------------------\n`;
                invoice += `Payment is accepted COD & ONLINE: mdnasima331-1@okaxis\n`;


        invoice += `Please deliver within 30 minutes.\n`;
        invoice += `Thank you for ordering from Pizza Party Zone!`;
        alert("✅ Order successful! Please wait...");

        const phoneNumber = "9113499324"; // seller's number
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(invoice)}`;
        window.open(url, "_blank");

    };

    // toggle of toppings tray
    const [toppingToggle, setToppingToggle] = useState(false)
const [changeBtnSign, setChangeBtnSign] = useState("+")
    const toppingToggleBtn = () => {

setToppingToggle(prev => !prev)

setChangeBtnSign(newSign => !newSign)

    }

    return (


        <div className=' lg:w-[30%] md:w-[40%] xl:w-[40%] h-full p-4 rounded-xl overflow-auto bg-white border-slate-300 border'>
            <p className='font-bold'>Price Details</p>

            <div className='flex justify-between pt-2'>
                <p>Total Items:</p>
                <p>{cartLength}</p>
            </div>

            <div className='flex justify-between'>
                <p>Dish price:</p>
                <p>₹ {totalPrice.toFixed(2)}</p>
            </div>

            <div className='flex justify-between border-b pb-4'>
                <p>TAX:</p>
                <p>₹ {tax.toFixed(2)}</p>
            </div>

            <div className='flex justify-between mt-4 font-bold border-b pb-4'>
                <p>Total price:</p>
                <p>₹ {finalBill.toFixed(2)}</p>
            </div>

            {/* EXTRA TOPPINGS */}
            <div className='mt-4 grid grid-cols-1 gap-2'>

                <div className='flex justify-between'>
                    <h1 className='font-bold text-green-500 capitalize'>Extra toppings</h1>
                     <NavLink className="p-2 w-6 h-6 text-xl  bg-green-500 justify-center rounded-full items-center flex text-white font-bold" onClick={toppingToggleBtn}>
                                                        {changeBtnSign ? "+" : "-"}
                                                    </NavLink>
                </div>

                {

                    topping.map(section => (

                        <div className={`grid grid-cols-1 gap-4 ${toppingToggle ? "flex" : "hidden"}` } >

                            <div key={section.id}>
                                <span className=' text-xs font-bold p-2 px-0 uppercase text-green-500'>
                                    {section.title}
                                </span>
                            </div>

                            {
                                section.DishItem.map(dish => (


                                    <div className='grid grid-cols-1 gap-4'>

                                        <div className='border flex justify-between items-center gap-4 p-2 py-6 rounded-xl border-[#9E9898] relative' key={dish.id} onClick={() => addItem(dish)} >


                                            {
                                                dish.size && (
                                                    <div className='bg-[#BFE18B] text-xs w-auto flex justify-center capitalize items-center absolute right-2 top-2 p-1'>
                                                        {dish.size}
                                                    </div>)
                                            }



                                            <div className='border rounded-full h-20 w-20 bg-slate-300'>
                                            </div>


                                            <div className='w-full flex flex-col gap-2'>
                                                <div className='pt-1'>
                                                    <p className='font-bold text-[#3A3636] text-xs xl:text-base uppercase'>{dish.name}</p>

                                                    {

                                                        dish.description && (
                                                            <p className='text-xs md:text-sm text-[#3A3636] pt-1'>{dish.description}</p>
                                                        )
                                                    }
                                                </div>


                                                <div className='flex gap-4 capitalize items-center'>
                                                    <NavLink className="md:w-20 w-16 md:h-9 h-8 md:text-base text-sm bg-green-500 justify-center rounded-[8px] items-center flex text-white font-bold" to="/Cart">
                                                        add +
                                                    </NavLink>
                                                    <p className='font-bold md:text-base text-sm'>{dish.price} ₹</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                    ))


                }




            </div>

            {/* Delivery Type */}
            <div className='flex flex-col gap-2 mt-4'>
                <p className='font-semibold'>Delivery Type:</p>
                <div className='flex gap-4'>
                    <label className='flex items-center text-sm gap-1'>
                        <input
                            type="radio"
                            value="dinein"
                            checked={deliveryType === "dinein"}
                            onChange={(e) => setDeliveryType(e.target.value)}
                        /> Dine-in<MdDinnerDining />

                    </label>
                    <label className='flex items-center gap-1 text-sm'>
                        <input
                            type="radio"
                            value="home"
                            checked={deliveryType === "home"}
                            onChange={(e) => setDeliveryType(e.target.value)}
                        />
                        Home Delivery<MdDeliveryDining />
                    </label>
                </div>
            </div>

            {/* Customer Info */}
            <div className='flex justify-between flex-wrap gap-2 mt-4'>

                <div className='w-full'>
                    <input
                        type="text"
                        className='h-12 w-full border rounded px-2'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div className='w-full'>

                    {deliveryType === "dinein" && (
                        <input
                            type="text"
                            className='h-12 w-full border rounded px-2'
                            placeholder='Table No'
                            value={tableNo}
                            onChange={(e) => setTableNo(e.target.value)}
                        />
                    )}

                </div>


                {deliveryType === "home" && (
                    <div className='w-full md:flex-row flex flex-col gap-4'>

                        <input
                            type="text"
                            className='h-12 w-full border rounded px-2'
                            placeholder='Delivery Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />


                        <input
                            type="text"
                            className='h-12 border w-full rounded px-2'
                            placeholder='Mobile No'
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                )}

            </div>

            {/* payment details */}

<div className='mt-4 text-sm'>
    <p>Payment is accepted COD & ONLINE: mdnasima331-1@okaxis</p>
</div>



            {/* Buttons */}
            <div className='flex flex-col gap-2 mt-4 capitalize'>
                <button
                    className="w-full h-12 rounded bg-[#FF3F3F] text-white font-medium"
                    onClick={sendOrderWhatsApp}
                >
                    Place Order
                </button>

                <NavLink
                    to="/Products"
                    className="bg-[#0BCBD1] w-full h-12 rounded flex justify-center items-center text-black font-medium"
                >
                    Go for more order
                </NavLink>
            </div>

            <p className='mt-2 text-xs'>By placing an order, you agree to our Terms & Conditions.</p>

        </div>





    )
}

export default CartSummary