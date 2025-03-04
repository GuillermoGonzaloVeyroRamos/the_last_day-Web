import React from 'react';
import Post from './Post';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "New Zombie Types Revealed!",
      content: "Discover the terrifying new zombie variants coming in the next update. Our development team has been working on creating more challenging enemies with unique abilities. The Screamer can alert nearby zombies, while the Tank can withstand massive damage and break through barricades with ease.",
      date: "March 15, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    },
    {
      title: "Survival Guide: Safe Houses",
      content: "Learn the best strategies to fortify and defend your safe house against the undead hordes. This guide covers essential fortification techniques, resource management, and how to set up effective traps to keep the infected at bay.",
      date: "March 10, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    },
    {
      title: "Weapon Crafting System Update",
      content: "Check out the new crafting mechanics and weapon combinations in our latest update. We've added over 20 new weapon blueprints and improved the crafting interface to make creating your zombie-slaying arsenal more intuitive and enjoyable.",
      date: "March 5, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    },
    {
      title: "Community Spotlight: Best Survival Stories",
      content: "We're highlighting some of the most incredible survival stories from our community. From last-second escapes to heroic sacrifices, these tales from the apocalypse will inspire your next playthrough.",
      date: "February 28, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    },
    {
      title: "Upcoming Map Expansion: The Hospital",
      content: "Get a sneak peek at our new map location - an abandoned hospital complex teeming with infected medical staff and valuable supplies. Navigate through dark corridors and operating rooms while avoiding the deadly special infected that roam the halls.",
      date: "February 20, 2024",
      image: process.env.PUBLIC_URL + '/imagen1.jpg'
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-banner">
        <div className="banner-overlay"></div>
        <h2 className="blog-page-title">Latest News</h2>
      </div>
      
      <div className="blog-container">
        <div className="blog-grid">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
