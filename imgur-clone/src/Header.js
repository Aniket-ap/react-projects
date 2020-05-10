import React from "react";
import faker from "faker";

import Headercard from "./headerComponent/HeaderCard";

import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsAward } from "react-icons/bs";

import a1 from "./cardPicture/a1.png";
import a2 from "./cardPicture/a2.png";
import a3 from "./cardPicture/a3.png";
import a4 from "./cardPicture/a4.png";
import a5 from "./cardPicture/a5.png";
import a6 from "./cardPicture/a6.png";
import a7 from "./cardPicture/a7.png";
import a8 from "./cardPicture/a8.png";

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
          <h3 style={{ marginRight: "20px", marginTop: "10px" }}>Sign in</h3>
          <HeaderButton btnName="Sign Up" />
        </div>

        <div style={{ clear: "both" }}></div>
      </div>

      <div className="headCardTitle">
        <h2 style={{ color: "#aed8ea" }}>
          Helllo, is it memes you're looking for?
        </h2>
      </div>

      <div className="headerCard">
        <Headercard
          img={a1}
          style={{ backgroundColor: "#f9b495" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a2}
          style={{ backgroundColor: "#5b62a5" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a3}
          style={{ backgroundColor: "#276860" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a4}
          style={{ backgroundColor: "#50535a" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a5}
          style={{ backgroundColor: "#be5844" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a6}
          style={{ backgroundColor: "#5a3d74" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a7}
          style={{ backgroundColor: "#56a2aa" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a8}
          style={{ backgroundColor: "#263ba7" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a4}
          style={{ backgroundColor: "#50535a" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a1}
          style={{ backgroundColor: "#f9b495" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a2}
          style={{ backgroundColor: "#5b62a5" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a3}
          style={{ backgroundColor: "#276860" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a4}
          style={{ backgroundColor: "#50535a" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a5}
          style={{ backgroundColor: "#be5844" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a6}
          style={{ backgroundColor: "#5a3d74" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a7}
          style={{ backgroundColor: "#56a2aa" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a8}
          style={{ backgroundColor: "#263ba7" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a1}
          style={{ backgroundColor: "#f9b495" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a3}
          style={{ backgroundColor: "#276860" }}
          postNum={faker.random.number()}
        />
        <Headercard
          img={a2}
          style={{ backgroundColor: "#5b62a5" }}
          postNum={faker.random.number()}
        />
      </div>
    </div>
  );
};

export default Header;
