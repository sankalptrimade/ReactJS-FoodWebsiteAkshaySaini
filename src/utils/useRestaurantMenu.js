// import { useEffect, useState } from "react";
// import { MENU_URL } from "../utils/constants";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(MENU_URL + resId);
//     const json = await data.json();
//     setResInfo(json.data);
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;
import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); // Fixed Typo

  useEffect(() => {
    const getRestaurantInfo = async () => {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setRestaurant(json.data);
    };

    getRestaurantInfo();
  }, [resId]); // Added `resId` as a dependency

  return restaurant;
};

export default useRestaurant;

