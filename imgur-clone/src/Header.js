import React from "react";

import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsAward } from "react-icons/bs";

import HeaderButton from "./headerComponent/Button";

const Header = () => {
  return (
    <div className="Header-Background">
      <div className="brand">
        
        <div className="allignLeft">
            <h1>imgur</h1>
            <HeaderButton logo={<MdLibraryAdd />} btnName="New Post" />
        </div>

            <form className="Searchbar-form">
            <input
                placeholder="Images, #tags, @users oh my!"
                type="text"
                className="searchbar-input"
                style={{ height: "36px" }}
            ></input>

            <button type="submit" className="submit-input">
                <img className="search" alt="" src={<FaSearch />}></img>
            </button>
            </form>

        <div className="allignRight">
            <i className="awardLogo">
            <BsAward />
            </i>
            <h3 style={{marginRight:"20px",marginTop:"10px"}}>Sign in</h3>
            <HeaderButton btnName="Sign Up" />
        </div>

        <div style={{clear: "both"}}></div>
      </div>
    </div>
  );
};

export default Header;
