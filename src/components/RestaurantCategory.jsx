import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data } = props;

  const handleClick = () => {};

  return (
    <div>
      <div className="w-full bg-gray-50 shadow-lg p-4 my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.categories.length})
          </span>
          <span>🔽</span>
        </div>

        <ItemList items={data.categories} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
