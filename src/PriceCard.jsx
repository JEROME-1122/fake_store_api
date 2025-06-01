
import "./ProductCard.css"


function PriceCard({ product, addItem,cartitems }) {
  return (
    <div className="box text-center rounded  rounded-xl p-5 pb-25 relative">
       <img  src={product.image} className="imgsec h-[180px] m-auto mb-3"  />
            <p className="mb-3">{product.title}</p>
          <p className=" absolute bottom-15 mx-auto left-0 right-0">Rs.{(product.price).toFixed(2)}</p>
        <button
          className="btn addbtn px-5 py-1 rounded rounded-lg absolute bottom-5 mx-auto left-0 right-0  w-30 cursor-pointer text-white"
          disabled={cartitems.some(obj => obj.title == product.title)}
          onClick={() => {
            addItem(product);
          }}
        >
          Add  Cart
        </button>
      </div>

  );
}

export default PriceCard;