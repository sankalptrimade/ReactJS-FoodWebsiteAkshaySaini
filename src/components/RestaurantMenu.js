// import { useParams } from "react-router";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { useState } from "react";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { addItem, removeItem } from "../utils/CartSlice";


// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const [quantities, setQuantities] = useState({});
//   const dispatch = useDispatch();

//   if (!resInfo) {
//     return <h3 className="text-center text-gray-400">Loading...</h3>;
//   }

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards?.[2]?.card?.card?.info || {};

//   let itemCards =
//     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
//       ?.card?.itemCards;

//   if (!itemCards) {
//     itemCards =
//       resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
//         ?.card?.categories?.[0]?.itemCards;
//   }

//   itemCards = itemCards || [];

//   const handleIncrease = (id) => {
//     setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
//   };

//   // const handleDecrease = (id) => {
//   //   setQuantities((prev) => ({
//   //     ...prev,
//   //     [id]: Math.max((prev[id] || 0) - 1, 0),
//   //   }));
//   // };


//   const handleAddItem = (item) => {
//     dispatch(addItem(item))
//   }

//   // const handleDecrease = (id) => {
//   //   setQuantities((prev) => {
//   //     const newQuantity = Math.max((prev[id] || 0) - 1, 0);
//   //     return { ...prev, [id]: newQuantity };
//   //   });
  
//   //   // Dispatch removeItem only if quantity reaches 0
//   //   if ((quantities[id] || 0) === 1) {
//   //     dispatch(removeItem(id));
//   //   }
//   // };
  
  

//   return (
//     <div
//       className="restaurant-menu text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
//       style={{ background: "linear-gradient(135deg, #2d2f3a, #3a3d4a)" }}
//     >
//       <h1 className="text-3xl font-bold text-yellow-400 mb-3 text-center">
//         {name || "No Name Available"}
//       </h1>
//       <p className="text-lg text-center mb-4">
//         {cuisines?.join(", ") || "No Cuisines Available"} -{" "}
//         {costForTwoMessage || "No Cost Info"}
//       </p>
//       <h2 className="text-2xl font-semibold text-center mb-4">Menu</h2>
//       {itemCards.length === 0 ? (
//         <p className="text-center">No menu items available.</p>
//       ) : (
//         <ul className="space-y-4">
//           {itemCards.map((item) => (
//             <li
//               key={item?.card?.info?.id}
//               className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
//             >
//               <span className="text-lg">
//                 {item?.card?.info?.name} - Rs.{" "}
//                 {item?.card?.info?.price / 100 ||
//                   item?.card?.info?.defaultPrice / 100}
//               </span>
//               <div className="flex items-center space-x-3">
//                 <button
//                   className="w-10 h-10 flex items-center justify-center bg-red-500 text-xl font-bold rounded-md"
//                   onClick={() => handleDecrease(item?.card?.info?.id)}
//                 >
//                   <AiOutlineMinus size={20} />
//                 </button>
//                 <span className="text-lg font-semibold" style={{margin: "0px 15px"}}>
//                   {quantities[item?.card?.info?.id] || 0}
//                 </span>
//                 <button
//                   className="w-10 h-10 flex items-center justify-center bg-green-500 text-xl font-bold rounded-md"
//                   onClick={() => {
//                     handleIncrease(item?.card?.info?.id);
//                     handleAddItem(item);
//                   }}
//                 >
//                   <AiOutlinePlus size={20} />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/CartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();

  if (!resInfo) {
    return <h3 className="text-center text-gray-400">Loading...</h3>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  let itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  if (!itemCards) {
    itemCards =
      resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
        ?.card?.categories?.[0]?.itemCards;
  }

  itemCards = itemCards || [];

  // Increase Quantity & Add Item to Cart
  const handleIncrease = (item) => {
    const id = item?.card?.info?.id;
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    dispatch(addItem(item));  // Add item to redux
  };

  // Decrease Quantity & Remove Item from Cart
  const handleDecrease = (item) => {
    const id = item?.card?.info?.id;
    if (!quantities[id]) return;

    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));

    dispatch(removeItem(item)); // Remove item from redux
  };

  return (
    <div
      className="restaurant-menu text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
      style={{ background: "linear-gradient(135deg, #2d2f3a, #3a3d4a)" }}
    >
      <h1 className="text-3xl font-bold text-yellow-400 mb-3 text-center">
        {name || "No Name Available"}
      </h1>
      <p className="text-lg text-center mb-4">
        {cuisines?.join(", ") || "No Cuisines Available"} -{" "}
        {costForTwoMessage || "No Cost Info"}
      </p>
      <h2 className="text-2xl font-semibold text-center mb-4">Menu</h2>
      {itemCards.length === 0 ? (
        <p className="text-center">No menu items available.</p>
      ) : (
        <ul className="space-y-4">
          {itemCards.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <span className="text-lg">
                {item?.card?.info?.name} - Rs.{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <div className="flex items-center space-x-3">
                <button
                  className="w-10 h-10 flex items-center justify-center bg-red-500 text-xl font-bold rounded-md"
                  onClick={() => handleDecrease(item)}
                >
                  <AiOutlineMinus size={20} />
                </button>
                <span className="text-lg font-semibold" style={{ margin: "0px 15px" }}>
                  {quantities[item?.card?.info?.id] || 0}
                </span>
                <button
                  className="w-10 h-10 flex items-center justify-center bg-green-500 text-xl font-bold rounded-md"
                  onClick={() => handleIncrease(item)}
                >
                  <AiOutlinePlus size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
