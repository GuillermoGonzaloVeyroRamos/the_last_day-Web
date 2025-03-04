import React from 'react';
import HomeBlog from './HomeBlog';

const Home = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to The Last Day</h2>
          <p className="hero-description">Explore the updates and new features of the game!</p>
          <button className="cta-button">Play Now</button>
        </div>
      </section>
      
      <section className="screenshots-section">
        <h2 className="section-title">Game Screenshots</h2>
        <div className="screenshots-grid">
          <div className="screenshot-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Zombie horde attack" />
            <div className="screenshot-overlay">
              <p>Survive massive zombie hordes</p>
            </div>
          </div>
          <div className="screenshot-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Weapon crafting" />
            <div className="screenshot-overlay">
              <p>Craft your weapons</p>
            </div>
          </div>
          <div className="screenshot-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Safe house" />
            <div className="screenshot-overlay">
              <p>Find safe houses to survive</p>
            </div>
          </div>
          <div className="screenshot-item">
            <img src={process.env.PUBLIC_URL + '/imagen1.jpg'} alt="Multiplayer combat" />
            <div className="screenshot-overlay">
              <p>Team up with other survivors</p>
            </div>
          </div>
        </div>
      </section>

      <HomeBlog />
    </>
  );
};

export default Home;