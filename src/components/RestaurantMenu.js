import { useEffect, useState } from "react";  
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4524941&lng=77.4992011&restaurantId=854669&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
    }
    return resInfo === null ? (<Shimmer />) : (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2> Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;