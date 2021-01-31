import React from "react";
import "./Review.css";

const Review = (props) => {
  return (
    <div className="review">
      <div className="review__header">
        <h1 className="review__name">{props.data.name}</h1>
        <p className="review__date">{props.data.date}</p>
      </div>
      <div className="review__message">
          <p>{props.data.content}</p>
      </div>
    </div>
  );
};

export default Review;
