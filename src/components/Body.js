import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DATA_FETCH_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  // useState Hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // Store all restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Store filtered list
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1 className="text-center text-danger mt-5">
        Oops, there is something wrong! Please check your internet connection...
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div
      className="body container-fluid py-5"
      style={{
        background: "linear-gradient(145deg, #282c3f, #343a4f)",
        padding: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        color: "#ffffff",
      }}
    >
      <div className="filter d-flex justify-content-center flex-wrap gap-3 mb-5">
        <input
          type="search"
          className="form-control w-25 text-dark"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "10px",
          }}
        />

        <button
          className="btn btn-warning fw-bold px-4 shadow-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>

        <button
          className="btn btn-success fw-bold px-4 shadow-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.0
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* <label>Username: </label> */}

        <button
          className="btn btn-danger fw-bold px-4 shadow-lg"
          onClick={() => setFilteredRestaurants(listOfRestaurants)}
        >
          Reset
        </button>
        
        <input
          type="text"
          className="form-control w-25 text-dark"
          placeholder="Write something to change the loggedInUser Value"
          onChange={(e) => setUserName(e.target.value)}
          value={loggedInUser || ""} // ✅ Fix: Default to empty string
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "10px",
          }}
        />
      </div>

      <div className="res-container row g-4 justify-content-center">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.info.id}
              className="col-lg-3 col-md-4 col-sm-6"
            >
              <Link
                to={"/restaurant/" + restaurant.info.id}
                className="text-decoration-none"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            </div>
          ))
        ) : (
          <h3 className="text-center text-light">No restaurants found</h3>
        )}
      </div>
    </div>
  );
};

export default Body;
