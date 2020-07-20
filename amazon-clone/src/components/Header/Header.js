import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../context/StateProvider";

function Header() {
  const [{basket}] = useStateValue();
  return (
    <nav className="header">
      {/* Brand Logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* Search Bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* Links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Aniket</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/* Shopping Basket Icon */}
                <ShoppingBasketIcon/>
                {/* Number of Items */}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>

      </div>
    </nav>
  );
}

export default Header;
