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

  return (
    <div className="menu">
      <img src={CDN_URL + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      <h3>Cuisines</h3>
      <ul>
        {cuisines.map((cuisine, num) => (
          <li key={num}>{cuisine}</li>
        ))}
      </ul>
      <h2>{costForTwoMessage}</h2>
    </div>
  );
};

export default RestaurantMenu;
