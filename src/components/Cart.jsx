// import React, { useState } from "react";

// // function addToCart(item) {
// //   // cart_items.push(item);
// //   const [cart_items, setCart_items] = useState([]);
// //   const updated_Cart = [...cart_items, item];
// //   setCart_items(updated_Cart);
// //   console.log("item added to cart", item);
// //   console.log("Current cart:", cart_items);
// // }
// function Cart() {

//   return <div>hello this is cart page..!</div>;
// }

// export default Cart;
// // export { addToCart };

import React, { useEffect, useState } from "react";
import { removeFromCart } from "../components/cartfun";
import "./style/cart.css";
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  // const [cart_price, setCart_price] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    console.log(storedCart);
  }, []);

  return (
    <div id="cart_main_div">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart_card">
            <div className="cart_img">
              <img src={item.image || item.images?.[0]} alt={item.title} />
            </div>
            <div className="cart_img_details">
              <p>{item.title}</p>
              <p>{Math.round(item.price * 87.53)}</p>
              <div className="cart_btn">
                <button
                  className="cart_remove"
                  onClick={() => {
                    console.log("remove btn clicked");
                    const updated = removeFromCart(item.id, item.category);
                    setCartItems(updated); // 👈 UI will now update immediately
                  }}
                >
                  remove
                </button>
                <button className="cart_buy ">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
