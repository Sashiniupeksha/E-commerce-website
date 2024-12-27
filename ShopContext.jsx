import React, { createContext, useState, useMemo } from "react";
import all_product from "../Components/Assets/all_product";  // Make sure this is correct

export const ShopContext = createContext(null);

// Function to initialize the cart with zeros
const getDefaultCart = () => {
  let cart = {};
  // Ensure that all_product has valid length and data
  all_product.forEach((product, index) => {
    cart[index] = 0;  // Initialize each product's cart count to 0
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),  // Prevent negative quantities
    }));
  };

  // Memoized calculation for total cart amount
  const getTotalCartAmount = useMemo(() => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }, [cartItems]);

  // Memoized calculation for total cart items
  const getTotalCartItems = useMemo(() => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }, [cartItems]);

  // Context value to pass to child components
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Ensure you're passing props correctly */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
