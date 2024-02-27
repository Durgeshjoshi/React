import RestaurantContainer from "./RestaurantContainer";
import restList from "../utilis/mockData";
import { useState, useEffect } from "react";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState(restList);

  // useEffect(() => {
  //     fetchData();
  // },[]);

  // fetchData = () => {
  //   const json = fetch();
  // }

  return (
    <>
      <div className="body">
        <div className="search">
          <button className="filter-btn" onClick={( ) => {
            const updatedList = restaurantList.filter(rest => rest.card.card.info.avgRating > 4.1)
            
            setRestaurantList(updatedList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container" style={{ margin: "10px" }}>
          {restaurantList.map((restaurant) => (
            <RestaurantContainer
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
