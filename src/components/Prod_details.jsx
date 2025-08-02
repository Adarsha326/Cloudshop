import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/style/prod_details.css";
import { addToCart } from "../components/cartfun";
// import addToCart from "../components/Cart.jsx";

function Prod_details() {
  // return <div>hello</div>;
  const location = useLocation();
  const { item, category_ary } = location.state; // 👈 Access passed state safely
  console.log(item, category_ary);
  const item_category = item.category;
  // console.log(item_category);

  console.log(category_ary[item_category]);

  if (!item) return <p>No product data found.</p>;
  function related_items() {
    // if (item.category == category_ary.category) {
    //   console.log("true");
    // }
  }
  // let cart_items = [];
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = cartItems.some(
      (cartItem) =>
        cartItem.id === item.id && cartItem.category === item.category
    );
    setIsInCart(alreadyInCart);
  }, [item]);
  return (
    <>
      <div id="details_main_div">
        <div className="detail_img_container">
          <img src={item.image || item.images?.[0]} alt={item.title} />
        </div>
        <div className="item_details">
          <h1>{item.title}</h1>
          <span>
            <p>{item.price}</p>
            {item.rating ? (
              <p>
                {item.rating.rate} rating from {item.rating.count} reviews
              </p>
            ) : null}
          </span>
          <p>{item.title + item.description}</p>
          {isInCart ? (
            <Link to={"/cart"}>
              <button id="cart_btn" onClick={() => addToCart(item)}>
                {" "}
                View cart
              </button>{" "}
            </Link>
          ) : (
            <button id="cart_btn" onClick={() => addToCart(item)}>
              {" "}
              Add to Cart
            </button>
          )}

          <button>Buy Now</button>
        </div>

        {/* Display other properties as needed */}
      </div>
      {/* <div id="related_items_div">
        <h2>Related Items</h2>
        <div id="related_items">
          {category_ary[item_category].map((rel_item) => {
            if (rel_item.title != item.title) {
              return (
                <div key={rel_item.title} id="related_img">
                  <img
                    className="related_item_img"
                    src={
                      Array.isArray(rel_item.images) &&
                      rel_item.images.length > 0
                        ? rel_item.images[0]
                        : rel_item.image || "fallback.jpg"
                    }
                    alt={rel_item.title}
                  />
                  <h2 className="rel_item_title">{rel_item.title}</h2>
                </div>
              );
            }
          })}
        </div>
      </div> */}
    </>
  );
}

export default Prod_details;
