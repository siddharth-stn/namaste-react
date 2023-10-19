import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { RES_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

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
