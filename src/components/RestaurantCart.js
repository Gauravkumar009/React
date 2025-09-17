import React from 'react'
import  {CDN_URL}  from '../utils/constants.js';

const RestaurantCart = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData.info;
    const { deliveryTime } = resData.info.sla;
    return (
        <div className="res-card" >
            <img alt="res-logo"
                className="res-logo"
                src={ CDN_URL + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCart