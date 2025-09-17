import React, { useEffect, useState } from "react";
import RestaurantCart from "./RestaurantCart.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();
      console.log("Full API response:", json);
      const restaurants =
        json?.data?.cards
          ?.flatMap(
            (c) =>
              c?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
          )
          .map((r) => ({ info: r.info })) || [];

      setListOfRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  };

  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }
  const filterTopRated = () => {
    setListOfRestaurants((prev) =>
      prev.filter((res) => Number(res.info?.avgRating) > 4.4)
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant, idx) => (
          <RestaurantCart
            key={`${restaurant.info?.id || "noid"}-${idx}`}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body