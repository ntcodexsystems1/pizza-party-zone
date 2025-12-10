import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../app/contextApi/CartContext';
import CartItem from '../../features/Cart/components/CartItem';
import { MdDeliveryDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";



const Cart = () => {

  const { cartItem } = useContext(CartContext);
  const [name, setName] = useState("");
  const [deliveryType, setDeliveryType] = useState("home"); // "home" or "dinein"
  const [tableNo, setTableNo] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
  const tax = totalPrice * 0.05
  const finalTotal = totalPrice + tax;
  const finalBill = Math.ceil(finalTotal);
  const totalItems = cartItem.length; // Total number of items



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
    invoice += `Total Items: ${totalItems}\n`;
    invoice += `-----------------------------------\n`;

    cartItem.forEach((item, index) => {
      invoice += `${index + 1}. ${item.name} (${item.size})\n`;
      invoice += `Description: ${item.description}\n`;
      invoice += `Price: ${item.price.toFixed(2)}₹\n`;
    });

    invoice += `-----------------------------------\n`;
    invoice += `Subtotal: ${totalPrice.toFixed(2)}₹\n`;
    invoice += `GST (5%): ${tax.toFixed(2)}₹\n`;
    invoice += `*Total Amount (Gross): ${finalBill.toFixed(2)}₹*\n`;
    invoice += `-----------------------------------\n`;

    invoice += `Please deliver within 30 minutes.\n`;
    invoice += `Thank you for ordering from Pizza Party Zone!`;
    alert("✅ Order successful! Please wait...");

    const phoneNumber = "8271154435"; // seller's number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(invoice)}`;
    window.open(url, "_blank");
  };

  return (
    <section className='flex justify-center items-start px-4 md:px-8 py-8 lg:px-24 md:py-12 lg:h-screen'>
      <div className='mx-auto container flex flex-col gap-6 md:gap-8 lg:gap-10 h-auto lg:h-[80%]'>

        {/* Heading */}
        <div className='border-b-2 border-[#0BCBD1] w-fit lg:pb-8 pb-4 '>
          <h1 className='lg:text-5xl md:text-[40px] text-[32px] capitalize font-bold'>
            my <span className='text-[#0BCBD1]'>cart</span>
          </h1>
        </div>

        <div className='flex gap-6 h-full flex-col md:flex-row'>




          <CartItem />




          {

            cartItem.length > 0 ? (

              <div className='border lg:w-[30%] md:w-[40%] xl:w-[40%] h-full p-4 rounded-xl overflow-auto'>
                <p className='font-bold'>Price Details</p>

                <div className='flex justify-between pt-2'>
                  <p>Total Items:</p>
                  <p>{cartItem.length}</p>
                </div>

                <div className='flex justify-between'>
                  <p>Dish price:</p>
                  <p>₹ {totalPrice.toFixed(2)}</p>
                </div>

                <div className='flex justify-between border-b pb-4'>
                  <p>TAX:</p>
                  <p>₹ {tax.toFixed(2)}</p>
                </div>

                <div className='flex justify-between mt-4 font-bold'>
                  <p>Total price:</p>
                  <p>₹ {finalBill.toFixed(2)}</p>
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
 Home Delivery<MdDeliveryDining/>
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

            ) : (<div className='flex flex-col gap-2 mt-4 capitalize'>

              <NavLink
                to="/Products"
                className="bg-[#0BCBD1] w-full h-12 rounded flex justify-center items-center text-black font-medium"
              >
                Go for order
              </NavLink>
            </div>
            )
          }


        </div>

      </div>

    </section>
  );
};

export default Cart;
