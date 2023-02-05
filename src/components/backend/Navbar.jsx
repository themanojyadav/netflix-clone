import React from "react";
import { BiBell, BiPowerOff, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="b_navbar">
      <div className="container">
        <div className="b_nav_content_wrapper">
          <div className="b_nav_left_col">
            <div className="b_nav_logo_col">
              <Link to="/user/dashboard">
                <img
                  src={process.env.REACT_APP_URL + "logo.png"}
                  alt=""
                  className="b_nav_logo"
                />
              </Link>
            </div>
            <div className="b_nav_menu_col">
              <ul className="b_nav_menu_list list-unstyled">
                <li>
                  <Link to="/user/dashboard">Home</Link>
                </li>
                <li>
                  <Link to="/user/tv-shows">TV Shows</Link>
                </li>
                <li>
                  <Link to="/user/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/user/movies/top-rated">Top Rated</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="b_nav_right_col">
            <ul className="b_nav_right_menu_list list-unstyled">
              <li>
                <a href="">
                  <BiSearch />
                </a>
              </li>
              <li>
                <a href="">
                  <BiBell />
                </a>
              </li>
              <li>
                <a href="">
                  <BiUser />
                </a>
              </li>
              <li>
                <Link to="/">
                  <BiPowerOff />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
