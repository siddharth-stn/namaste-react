import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

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
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log(categories);
  return (
    <div className="flex flex-col items-center pt-10">
      <div className="w-48">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <h3>Cuisines</h3>
        <ul>
          {cuisines.map((cuisine, num) => (
            <li key={num}>{cuisine}</li>
          ))}
        </ul>
        <h2>{costForTwoMessage}</h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
