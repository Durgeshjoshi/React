import { CON_URL } from "../utilis/constants";

const RestaurantContainer = (props) => {
  const resData = { props };
  const { cloudinaryImageId, name, cuisines, avgRating } =
    props.resData.card.card.info;
  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={CON_URL + cloudinaryImageId}
          alt="pizza"
          className="res-logo"
          width="200"
          height="200"
        />
        <h3 className="res-name">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4 className="rating">{avgRating} Star</h4>
        <h4 className="delvery-time">38 minuts</h4>
      </div>
    </>
  );
};

export default RestaurantContainer;
