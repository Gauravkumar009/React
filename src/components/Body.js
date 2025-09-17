import React, { useEffect, useState } from 'react'
import RestaurantCart from './RestaurantCart.js';
import reslist from '../utils/mockData.js';


const Body = () => {
    // loacl variable - super powerful variable
    
    let [listOfRestaurants, setListOfRestaurants] = useState(reslist);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                    setListOfRestaurants([...listOfRestaurants]);
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (<RestaurantCart resData={restaurant} key={restaurant.info.id} />))
                }
            </div>
        </div>
    );
}

export default Body