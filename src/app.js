import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import GroceryStore from "./components/GroceryStore";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/GroceryStore"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // For example we are making an authentication for username and password
    const data = {
      name: "Sankalp Trimade",
    };
    setUserName(data.name);
  });
  return (

    <Provider store={AppStore}>
      {/* If we want to update the value in future then we have to pass setUserName also so that it is accessible in any of the component */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

    //for example if we pass two UserContext.Provider like if we use another UserContext.Provider to wrap a header component then also it will work. The first Provider will have its value what it is set and if we give another value in the header component UserContext.Provider then it will only show that name in the header component for example if I set the userName value = "John Doe" then it will display the name "Jhon Doe" in header component it will not affect the other components
    // <UserContext.Provider value={{ loggedInUser: userName }}>
    //   <div className="app">
    //     <UserContext.Provider value={{ loggedInUser: "John Doe" }}>
    //       <Header />
    //     </UserContext.Provider>
    //     <Outlet />
    //   </div>
    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading Grocery Store...</h2>}>
            <Grocery />
          </Suspense>
        ), // ✅ Wrapped in Suspense
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
