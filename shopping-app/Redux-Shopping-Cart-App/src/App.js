import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-f2ae7-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    sendRequest()
  }, [cart]);

  // console.log(isLoggedIn);
  // const cartItems = useSelector((state) => state.cart.itemsList)
  // console.log(cartItems);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
