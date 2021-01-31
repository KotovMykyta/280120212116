import React, { useState } from "react";
import "./Reviews.css";
import ReviewsData from "../data/data.json";
import Review from "./Review";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const Reviews = () => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState(ReviewsData);

  const addPost = (event) => {
    if (post.length > 1) {
      if (event.key === "Enter" && event.ctrlKey) {
        setPosts([
          ...posts,
          {
            id: Date.now(),
            name: "Пользователь",
            content: post,
            date: new Date().toLocaleString("ru", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          },
        ]);
        setPost("");
      }
    }
  };
  const addPostClick = () => {
    if (post.length > 1) {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          name: "Пользователь",
          content: post,
          date: new Date().toLocaleString("ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      ]);
      setPost("");
    }
  };

  return (
    <div className="reviews">
      <div className="reviews__header">
        <div className="reviews__links">
          <h1 className="reviews__text">Последние отзывы</h1>
          <a className="reviews__link" href="#">
            Все отзывы
          </a>
        </div>
        <div className="reviews__icons">
          <div className="reviews__like">
            <span>
              <FavoriteIcon fontSize="small" style={{ color: "#73b4d5" }} />
            </span>
            <span>131</span>
          </div>
          <div className="reviews__comment">
            <span>
              <ChatBubbleIcon fontSize="small" style={{ color: "#73b4d5" }} />
            </span>
            <span>{posts.length}</span>
          </div>
        </div>
      </div>

      {posts.slice(posts.length - 3, posts.length).map((review) => {
        return <Review key={review.id} data={review} />;
      })}

      <div className="reviews__answer">
        <div className="reviews__input">
          <textarea
            className="reviews__inputField"
            type="text"
            value={post}
            onChange={(event) => setPost(event.target.value)}
            onKeyPress={addPost}
          />
        </div>
        <input
          type="submit"
          className="reviews__button"
          value="Написать консультанту"
          onClick={addPostClick}
        />
      </div>
    </div>
  );
};

export default Reviews;
