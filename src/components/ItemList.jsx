import useCartStore from "../utils/useCartStore";

const ItemList = (props) => {
  const { items } = props;

  const addCartItem = useCartStore((state) => state.addCartItem);

  const handleAdd = (item) => {
    addCartItem(item);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        return (
          <div key={index} className="flex gap-5 p-4 shadow-lg">
            <div>{item.title}</div>
            <button
              onClick={handleAdd.bind(this, item)}
              className="bg-black rounded text-white px-2"
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
