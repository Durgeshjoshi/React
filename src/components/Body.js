import RestaurantContainer from "./RestaurantContainer";
import SimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    setRestaurantList(json?.data?.cards.slice(3));
  };

  return restaurantList.length === 0 ? (
    <SimmerUI />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <button
            className="filter-btn"
            onClick={() => {
              const updatedList = restaurantList.filter(
                (rest) => rest.card.card.info.avgRating > 4.1
              );

              setRestaurantList(updatedList);
            }}
          >
            Top Rated Restaurants
          </button>
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
