import React, { createContext, useEffect, useState } from "react";
import Display_pro from "./Display_pro";

const combinedProduct = createContext();
export default function Fetch_pro() {
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [combinedItems, setCombinedItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems1(data))
      // .then((data) => console.log(data, "data"))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => data)
      .then((product) => setItems2(product.products))
      .catch((err) => console.error(err));
  }, []);

  // console.log(items1, items2);

  useEffect(() => {
    if (items1.length > 0 && items2.length > 0) {
      const combined = [...items1, ...items2];
      // setCombinedItems([...items1, ...items2]);
      //   console.log(combinedItems);
      setCombinedItems(combined);
    }
  }, [items1, items2]);

  // useEffect(() => {
  //   console.log(combinedItems);
  // }, [combinedItems]);
  return (
    <div>
      <combinedProduct.Provider value={combinedItems}>
        <Display_pro></Display_pro>
      </combinedProduct.Provider>
    </div>
  );
}
export { combinedProduct };
