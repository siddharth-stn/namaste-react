import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useGetRestaurantList from "../utils/useGetRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Main = () => {
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useGetRestaurantList();

  const [searchText, setSearchText] = useState("");

  const findBestRestaurants = () => {
    let filteredArr = filteredRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setFilteredRestaurants(filteredArr);
  };

  if (useOnlineStatus() === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="flex items-center">
        <div className="flex items-center">
          <input
            type="text"
            className="m-1 mx-4 p-1 outline outline-1 rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-400 px-4 py-1.5 text-white rounded font-bold"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //search text from input box
              //Optional Chaining in javaScript
              setFilteredRestaurants(
                listOfRestaurants.filter((restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                })
              );
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-green-400 px-4 py-1.5 mx-4 text-white rounded font-bold whitespace-nowrap"
            onClick={findBestRestaurants}
          >
            Find Best Restaurants
          </button>
        </div>
      </div>
      <div className="p-4 flex gap-4 flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
