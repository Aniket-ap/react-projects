import React, { useState } from "react";

import { IoMdEye, IoMdText, IoMdThumbsUp } from "react-icons/io";

const Card = (props) => {
  const [likeCount, setCountlike] = useState(0);
  const [commentCount, setCountComment] = useState(0);
  const [showCount, setCountShow] = useState(0);

  return (
    <div className="card-image">
      <img
        src={props.image}
        alt=""
        onClick={() => (true ? setCountShow(showCount + 1) : "")}
      />
      <div className="card-text">
        <h4>
          <b>{props.title}</b>
        </h4>
      </div>
      <div className="card-stats">
        <div className="like">
          <button
            className="card-button"
            onClick={() => (true ? setCountlike(likeCount + 1) : "")}
          >
            <span>
              <IoMdThumbsUp />
              {likeCount}
            </span>
          </button>
          <span>{props.like}</span>
        </div>
        <div className="comment">
          <button
            className="card-button"
            onClick={() => (true ? setCountComment(commentCount + 1) : "")}
          >
            <span>
              <IoMdText />
              {commentCount}
            </span>
          </button>
        </div>
        <div className="seen">
          <button className="card-button">
            <span>
              <IoMdEye />
              {showCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
