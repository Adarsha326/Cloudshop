// import React, { useEffect, useState } from "react";

// function Pro_details() {
//   const [items1, setItems1] = useState([]);
//   const [items2, setItems2] = useState([]);
//   const [grouped, setGrouped] = useState([]);
//   const [merged_item, setMerged_item] = useState([]);
//   function fetchItem1() {
//     useEffect(() => {
//       fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((data) => setItems1(data))
//         .catch((err) => console.error(err));
//     }, []);
//     fetchItem2();
//   }
//   function fetchItem2() {
//     useEffect(() => {
//       fetch("https://dummyjson.com/products")
//         .then((res) => res.json())
//         .then((data) => data)
//         .then((product) => setItems2(product.products))
//         .catch((err) => console.error(err));
//     }, []);
//   }
//   fetchItem1();
//   useEffect(() => {
//     console.log("item 1", items1.length);
//     console.log("item 2", items2.length);
//   }, [items1, items2]);

//   useEffect(() => {
//     if (items1.length === 0 && items2.length === 0) return;

//     const combinedItems = [...items1, ...items2];
//     console.log(combinedItems);
//     // setGrouped(combinedItems);
//     // console.log(combinedItems[0].title);
//     const ct = combinedItems;
//     console.log("length of ct is : ", ct.length);

//     // for (let i = 1; i <= ct.length; i++) {
//     //   const itemArray = {
//     //     item_id: i,
//     //     title: ct[i - 1].title,
//     //     image: ct[i - 1].image,
//     //     category: ct[i - 1].category,
//     //     description: ct[i - 1].description,
//     //     price: ct[i - 1].price,
//     //   };
//     //   setMerged_item((prevArray) => [...prevArray, itemArray]);
//     //   // console.log(itemArray);
//     // }
//     // console.log(merged_item, "my array");

//     const merged = combinedItems.map((item, index) => ({
//       item_id: index + 1,
//       title: item.title,
//       image: item.image,
//       category: item.category,
//       description: item.description,
//       price: item.price,
//     }));
//     setMerged_item(merged);
//     const group = combinedItems.reduce((acc, item) => {
//       const category = item.category;
//       if (!acc[category]) {
//         acc[category] = [];
//       }
//       acc[category].push(item);
//       return acc;
//     }, {});
//     setGrouped(group);
//   }, [items1, items2]);
//   console.log(merged_item, "merged ");
//   console.log(grouped, "group");

//   return (
//     <div id="product_main_div">
//       hii from product details
//       <div className="product_container">
//         {Object.keys(grouped).map((category) => {
//           return (
//             <div key={category} className="category_div">
//               <h2 className="pro_head">{category}</h2>
//               {grouped[category].map((item) => {
//                 return (
//                   <div className="img_container">
//                     <img
//                       src={
//                         Array.isArray(item.images) && item.images.length > 0
//                           ? item.images[0]
//                           : item.image || "fallback.jpg"
//                       }
//                       alt={item.title}
//                       onError={(e) => {
//                         console.warn("Image failed to load:", e.target.src);
//                         e.target.onerror = null;
//                         e.target.src = "fallback.jpg";
//                       }}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Pro_details;
