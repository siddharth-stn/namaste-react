import useCartStore from "../utils/useCartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);
  console.log(cartItems);
  return (
    <div className="m-2 p-4 flex items-center flex-col">
      <div className="w-8/12">
        <span className="bg-red-950 px-6 py-2 text-white font-bold text-lg text-center">
          Cart
        </span>
        <span>
          <button>Empty Cart</button>
        </span>
      </div>
      <div>
        <h2 className="font-bold">Ordered Items</h2>
        <ul>
          {cartItems.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
