import React, { useEffect, useState } from "react";
import img from "../assets/images/images.jpeg";
import img1 from "../assets/images/images2.jpeg";
import img2 from "../assets/images/images3.jpeg";
import img3 from "../assets/images/images4.jpeg";

function Slide() {
  const coro_img_arry = [img, img1, img2, img3];
  // var index = 0;
  const [index, setIndex] = useState(0);
  const next_img = () => {
    setIndex((index) => (index += 1) % coro_img_arry.length);
    console.log(index);
  };
  const prev_img = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + coro_img_arry.length) % coro_img_arry.length
    );
  };
  useEffect(() => {
    const timer = setInterval(next_img, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <img src={coro_img_arry[index]} alt="img" width="100%" height="300px" />
    </div>
  );
}

export default Slide;
