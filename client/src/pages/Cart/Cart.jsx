import React, { useContext, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../app/contextApi/CartContext';

const Cart = () => {
  const { cartItem, removeItem } = useContext(CartContext);

  const [name, setName] = useState("");
  const [deliveryType, setDeliveryType] = useState("home"); // "home" or "dinein"
  const [tableNo, setTableNo] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
  const finalTotal = totalPrice;

  const sendOrderWhatsApp = () => {
    if (!name || (deliveryType === "dinein" && !tableNo) || (deliveryType === "home" && (!address || !mobile))) {
      alert("Please fill all required fields!");
      return;
    }

    let message = `🛒 *New Order Received!*\n\n`;
    message += `*Customer Name:* ${name}\n`;
    message += deliveryType === "dinein"
      ? `*Table No:* ${tableNo}\n\n`
      : `*Delivery Address:* ${address}\n*Mobile No:* ${mobile}\n\n`;

    message += `*Order Details:*\n`;
    cartItem.forEach((item, index) => {
      message += `📌 ${index + 1}. ${item.name}\n`;
      message += `   Description: ${item.description}\n`;
      message += `   Price: ${item.price}₹\n\n`;
    });

    message += `💰 *Total Price:* ${finalTotal.toFixed(2)}₹\n\n`;
    message += `⌛ Please deliver within 30 minutes.\n📞 Thank you!`;

    const phoneNumber = "8271154435"; // seller's number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className='flex justify-center items-start px-4 md:px-8 py-8 lg:px-24 md:py-12 lg:h-screen'>
      <div className='mx-auto container flex flex-col gap-6 md:gap-8 lg:gap-10 h-auto lg:h-[80%]'>

        {/* Heading */}
        <div className='border-b-2 border-[#0BCBD1] w-fit pb-4'>
          <h1 className='lg:text-5xl md:text-[40px] text-[32px] capitalize font-bold'>
            my <span className='text-[#0BCBD1]'>cart</span>
          </h1>
        </div>

        <div className='flex gap-6 h-full flex-col md:flex-row'>

          {/* Cart Items */}
          <div className='border p-4 lg:w-[70%] md:w-[60%] xl:w-[60%] rounded-xl flex flex-col overflow-auto'>
            {cartItem.map(item => (
              <div className='flex justify-between sm:grid grid-cols-3 flex-wrap gap-4 py-2 items-center border-b-2' key={item.id}>
                <div className='w-[40%] sm:w-auto'>
                  <img src={item.img} alt="" className='object-cover md:w-20 md:h-20 w-12 h-12'/>
                </div>
                <div className='flex flex-col justify-start sm:w-auto w-[60%]'>
                  <p className='md:text-base text-sm font-bold text-[#3A3636] uppercase'>{item.name}</p>
                  <p className='text-sm text-[#3A3636]'>{item.description}</p>
                  <p className='pt-2 text-base font-bold'>{item.price} ₹</p>
                </div>
                <div className='flex justify-end items-center'>
                  <MdDelete className='text-2xl cursor-pointer' onClick={() => removeItem(item.id)} />
                </div>
              </div>
            ))}
          </div>

          {/* Price & Customer Details */}
          <div className='border lg:w-[30%] md:w-[40%] xl:w-[40%] h-full p-4 rounded-xl overflow-auto'>
            <p className='font-bold'>Price Details</p>
            <div className='flex justify-between pt-2'>
              <p>Dish price:</p>
              <p>₹ {totalPrice.toFixed(2)}</p>
            </div>
            <div className='flex justify-between border-b pb-4'>
              <p>TAX:</p>
              <p>+ 0</p>
            </div>
            <div className='flex justify-between mt-4 font-bold'>
              <p>Total price:</p>
              <p>₹ {finalTotal.toFixed(2)}</p>
            </div>

            {/* Delivery Type */}
            <div className='flex flex-col gap-2 mt-4'>
              <p className='font-semibold'>Delivery Type:</p>
              <div className='flex gap-4'>
                <label>
                  <input
                    type="radio"
                    value="dinein"
                    checked={deliveryType === "dinein"}
                    onChange={(e) => setDeliveryType(e.target.value)}
                  /> Dine-in
                </label>
                <label>
                  <input
                    type="radio"
                    value="home"
                    checked={deliveryType === "home"}
                    onChange={(e) => setDeliveryType(e.target.value)}
                  /> Home Delivery
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

            {/* Buttons */}
            <div className='flex flex-col gap-2 mt-4'>
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

            <p className='mt-2 text-xs'>Note: Wait for serve dish on your table within 15 minutes</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cart;
