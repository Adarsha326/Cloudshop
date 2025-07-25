import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { combinedProduct } from "./Fetch_pro";
import "../components/style/display_pro.css";
import { Link } from "react-router-dom";
function Display_pro() {
  //   console.log(combinedProduct.length);
  const merged = useContext(combinedProduct);
  // const [merged_ary, setMerged_ary] = useState([]);
  const [category_ary, setCategory_ary] = useState([]);
  useEffect(() => {
    if (merged.length > 0) {
      // console.log(merged);
      // setMerged_ary(merged);
      // console.log(merged_ary);

      const category = merged.reduce((acc, item) => {
        const pro_category = item.category;
        if (!acc[pro_category]) {
          acc[pro_category] = [];
        }
        acc[pro_category].push(item);
        return acc;
      }, {});
      setCategory_ary(category);
    }
  }, [merged]);
  useEffect(() => {
    console.log(category_ary);
  }, [category_ary]);

  return (
    <div id="product_main_div">
      <div id="prod_container">
        {Object.keys(category_ary).map((category, index) => {
          return (
            <div
              key={category}
              // id="category_div"
              className={`index-${index.toLocaleString()} category_div`}
            >
              <h2 id="category_head">{category}</h2>
              <div
                // id="category_item"
                className={[category, "category_item"]
                  .filter(Boolean)
                  .join(" ")}
              >
                {category_ary[category].map((item) => {
                  return (
                    <div key={item.title} className="img_container">
                      <Link to={"/prod_details"} state={{ item, category_ary }}>
                        <img
                          src={
                            Array.isArray(item.images) && item.images.length > 0
                              ? item.images[0]
                              : item.image || "fallback.jpg"
                          }
                          alt={item.title}
                          onError={(e) => {
                            console.warn("Image failed to load:", e.target.src);
                            e.target.onerror = null;
                            e.target.src = "fallback.jpg";
                          }}
                        />
                      </Link>
                      <h2>{item.title}</h2>
                      {/* <p>{item.price}</p> */}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div id="add1" className="category_div">
          <h3>Top Selling fragrances</h3>

          {/* <img
            src={
              "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
            }
            alt="img"
          /> */}
          <img
            src={
              "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp"
            }
            alt="img"
          />
          <p>Calvin Klein CK One</p>
        </div>
      </div>
    </div>
  );
}

export default Display_pro;
