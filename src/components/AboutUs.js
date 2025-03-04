import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-banner">
        <h2 className="about-title">About The Last Day</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h3>The Apocalypse Begins</h3>
          <p>
            "The Last Day" is a survival horror game set in a world ravaged by a mysterious infection. 
            Players must navigate through devastated cities, abandoned facilities, and dark forests 
            while fighting off hordes of the infected and competing with other survivors for limited resources.
          </p>
          
          <h3>Gameplay Features</h3>
          <ul className="features-list">
            <li>
              <span className="feature-highlight">Intense Survival Mechanics</span> - Manage your hunger, thirst, 
              and infection levels while scavenging for supplies
            </li>
            <li>
              <span className="feature-highlight">Dynamic Weather System</span> - Face additional challenges 
              with changing weather conditions that affect gameplay
            </li>
            <li>
              <span className="feature-highlight">Crafting System</span> - Create weapons, tools, and shelter 
              from materials found throughout the world
            </li>
            <li>
              <span className="feature-highlight">Multiplayer Co-op</span> - Team up with friends to increase 
              your chances of survival
            </li>
          </ul>
          
          <h3>The Story</h3>
          <p>
            You wake up in a hospital bed, disoriented and alone. The world as you knew it has changed forever. 
            A deadly virus has spread across the globe, turning most of humanity into mindless, aggressive creatures. 
            Your mission is to find other survivors, uncover the truth behind the outbreak, and find a way to survive 
            in this new, hostile world.
          </p>
        </div>
      </div>
      
      <div className="about-gallery">
        <h3 className="gallery-title">Game Gallery</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Gameplay screenshot" />
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Character customization" />
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Zombie horde" />
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Safe zone" />
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Weapons crafting" />
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Night survival" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;