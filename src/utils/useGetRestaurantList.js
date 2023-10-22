import { useState, useEffect } from "react";
import { RES_LIST_URL } from "./constants";

const useGetRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useGetRestaurantList;
