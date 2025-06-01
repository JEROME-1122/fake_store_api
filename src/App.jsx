import { useState,useEffect } from "react";
import "./App.css";
import CartItem from "./CartItem";
import PriceCard from "./PriceCard";

function App() {
  const [cartitems, setCartItems] = useState([]);
  const [shipcard, setShipcart] = useState([]);
  const [total, setTotal] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

   const getShipDate = async () => {
    try {
      const cartData = await fetch("https://fakestoreapi.com/products");
      const cartDatas = await cartData.json();
      setShipcart(cartDatas);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      getShipDate();
    }, []);

  const addItem = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price);
  };

  const removeItem = (item) => {
    let index = cartitems.findIndex((obj) => obj.title == item.title);
    console.log(index);
    cartitems.splice(index, 1);
    setCartItems([...cartitems]);
    setTotal(total - item.price)
  };

  return (
    <>

    <header className="py-5  ">
      <div className="conatiner flex justify-between lg:w-[75%]  md:w-[80%] w-[90%] mx-auto">
        <p ><b>Our Products</b></p>

        <div className="" >
          
        </div>
        <div className="flex" onClick={() => setShowPopup(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <div className="bg-black w-[20px] h-[20px] rounded rounded-[50%] text-white align-center justify-center flex mt-[-10px]">
 <p className="text-center text-[13px] mt-0" > {cartitems.length}</p>
            </div>
           
          </div>
      </div>
    </header>
    <main>
      <section className="main_sec lg:w-[75%]  md:w-[80%] w-[90%] mx-auto relative align-center justify-center flex mb-10">
        <div className="product_section  ">

          <h1 className="text-4xl mt-20"><b>Product List</b></h1>
           <div className="space-y-8 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0  mt-10">
  {shipcard.map((product) => {
            return <PriceCard product={product} addItem={addItem} cartitems={cartitems}/>;
          })}
           </div>
        </div>

        {showPopup && (
<div className="card_sec_main  mx-auto p-10  ">
      
      <div className=" card_sec xl:w-[55%] lg:w-[65%]  md:w-[85%] w-[100%] ">

        <p className="closebtn" onClick={() => setShowPopup(false)}>X</p>
        <h2 className="cart_item_text">
          Cart  Item
          </h2>
          

          <div className="flex flex-col">
            {cartitems.map((item) => {
              return <CartItem removeItem={removeItem} item={item} />;
            })}
            <div className="flex  totalsec">
          <h4 className="">
            Total Rs:    {total.toFixed(2)}
             </h4>
             
            </div>
           
          </div>
        
      </div>
    </div>
        )}
      </section>
    </main>

   
    </>
    
  );
}

export default App;