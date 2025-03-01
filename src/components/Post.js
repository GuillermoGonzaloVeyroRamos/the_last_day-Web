import React from 'react';
import './Post.css';

const Post = ({ title, content, date, image }) => {
  return (
    <article className="post-card">
      <div className="post-image-container">
        <img src={image} alt={title} className="post-image" />
        <div className="post-date">{date}</div>
      </div>
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-text">{content}</p>
        <button className="post-read-more">Read More</button>
      </div>
    </article>
  );
};

export default Post;
