import React from "react";

const Headercard = (props) => {
  return (
    <div className="headSmallCard">
      <img src={props.img} alt="" style={{width:"100%"}} ></img>
      <div style = {props.style}>
        <h6>corgi</h6>
        <p>{props.postNum} Posts</p>
      </div>
    </div>
  );
};

export default Headercard;
