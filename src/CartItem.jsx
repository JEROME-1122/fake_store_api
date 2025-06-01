import "./CartItem.css"


function CartItem({item,removeItem}) {
  return  <div className="item_sec flex align-center justify-between md:px-5 md:py-5 py-2 mb-2 rounded-2xl">
    <img src={item.image} className="item_image h-[50px] w-[50px] rounded rounded-[50%] " alt="" />
              <h1 className=" item_title w-[200px] text-left" >{item.title}</h1>
              <h2 className="item_price">Rs. {item.price.toFixed(2)}</h2>
              <button className="text-white  cursor-pointer  item_close" onClick={() => {
                removeItem(item)
              }}>X</button>
            </div>;
}

export default CartItem;