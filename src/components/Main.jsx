import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useGetRestaurantList from "../utils/useGetRestaurantList";

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

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button className="filter-btn" onClick={findBestRestaurants}>
          Find Best Restaurants
        </button>
      </div>
      <div className="res-container">
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
