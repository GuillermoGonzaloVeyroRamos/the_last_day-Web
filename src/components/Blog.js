import React from 'react';
import Post from './Post';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "New Zombie Types Revealed!",
      content: "Discover the terrifying new zombie variants coming in the next update...",
      date: "March 15, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    },
    {
      title: "Survival Guide: Safe Houses",
      content: "Learn the best strategies to fortify and defend your safe house...",
      date: "March 10, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    },
    {
      title: "Weapon Crafting System Update",
      content: "Check out the new crafting mechanics and weapon combinations...",
      date: "March 5, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    }
  ];

  return (
    <section className="blog-section">
      <h2 className="section-title">Latest News</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
