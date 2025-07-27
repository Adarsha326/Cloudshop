import { useState } from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Prod_details from "./components/Prod_details";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <div id="app_div">
      {/* <Product></Product> */}
      {/* <Fetch_pro /> */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <Header />
        <Routes>
          {/* <Route element={<Header />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="prod_details" element={<Prod_details></Prod_details>} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
