// we can do destructuring of props also like in the parameter we can pass
// const RestaurantCard = ({resName, resImg, resCuisine, resRating, resTime})
// or inside we can create a prop variable and destructure it
// {resName, resImg, resCuisine, resRating, resTime} = const prop

import { IMG_URL } from "../utils/constants";

// const RestaurantCard = (props) => {
//   const { name, img, cuisine, rating, time } = props.resData;
//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img className="res-logo" src={resImg} alt="Restaurant-img" />
//       <h3>{props.name}</h3>
//       <h4>{resCuisine}</h4>
//       <h4>{resRating} stars</h4>
//       <h4>{resTime} minutes</h4>
//     </div>
//   );
// };



// const RestaurantCard = ({ resData }) => {
//     // Add a fallback in case resData is undefined
//     if (!resData || !resData.info) {
//       return null; // Don't render anything if data is missing
//     }
  
//     const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData.info;
  
//     return (
//       <div className="res-card" style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "8px", margin: "10px" }}>
//         <img src={IMG_URL + cloudinaryImageId} alt={name} className="res-logo"/>
//         <h3>{name}</h3>
//         <h4>{cuisines ? cuisines.join(", ") : "No Cuisine Info"}</h4>
//         <h4>{avgRating ? `${avgRating} ⭐` : "No Ratings"}</h4>
//         <h4>{sla ? `${sla.deliveryTime} min` : "Unknown Time"}</h4>
//       </div>
//     );
//   };



// export default RestaurantCard;


const RestaurantCard = ({ resData }) => {
  // Add a fallback in case resData is undefined
  if (!resData || !resData.info) {
    return null; // Don't render anything if data is missing
  }

  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData.info;

  return (
    <div
      className="res-card text-center p-3 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #2d2f3a, #3a3d4a)",
        borderRadius: "12px",
        margin: "15px",
        color: "#fff",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="res-logo rounded mb-3"
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 className="fw-bold" style={{ fontSize: "1.5rem", color: "#FFD700" }}>{name}</h3>
      <h4 style={{ fontSize: "1rem", fontWeight: "400" }}>
        {cuisines ? cuisines.join(", ") : "No Cuisine Info"}
      </h4>
      <h4 style={{ fontSize: "1rem", fontWeight: "400" }}>
        {avgRating ? `${avgRating} ⭐` : "No Ratings"}
      </h4>
      <h4 style={{ fontSize: "1rem", fontWeight: "400" }}>
        {sla ? `${sla.deliveryTime} min` : "Unknown Time"}
      </h4>
    </div>
  );
};

export default RestaurantCard;
