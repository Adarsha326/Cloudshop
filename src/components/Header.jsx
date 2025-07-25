import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../components/style/header.css";

function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="layout_div">
      {/* <div className="part-A"> */}
      <div className="logo_container">
        <h2>Cloud Shope</h2>
      </div>
      <div className="search_bar">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search_logo">
          <i className="bx bx-search-alt-2"></i>
        </div>
      </div>
      <div className="head-fun">
        <Link to="/login" className="login_btn">
          <i className="bx bx-user-plus"></i>
          <span>Login</span>
        </Link>
        <div className="cart">
          <Link to="/cart">
            <i className="bx bx-cart"></i>
          </Link>
        </div>
        <i className="bx bx-menu"></i>
      </div>
      {/* </div> */}
      {/* <div className="part-B">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div> */}
      <Outlet />
    </div>
  );
}

export default Header;
