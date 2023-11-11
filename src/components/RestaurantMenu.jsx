import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useGetRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((cat) => {
      return (
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });

  return (
    <div className="flex flex-col pt-10 w-[300px] mx-auto gap-5">
      <div className="w-48">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <div>
          <h3 className="font-bold">Cuisines:</h3>
          <h3 className="pl-2">{cuisines.join(", ")}</h3>
        </div>

        <h2 className="font-bold">{costForTwoMessage}</h2>
      </div>
      <div>
        {categories.map((cat, index) => {
          return (
            // Controlled Component
            <RestaurantCategory
              key={index}
              data={cat.card.card}
              showItems={index === showIndex && true}
              setShowIndex={() => {
                if (showIndex === index) {
                  setShowIndex(null);
                } else {
                  setShowIndex(index);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
