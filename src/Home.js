// Home.js
import React, { useMemo } from "react";
import "./App.css";
import favicon from "./images/favicon.png";

const NUM_STARS = 150;

const Home = () => {
  const stars = useMemo(() => {
    return Array.from({ length: NUM_STARS }).map(() => ({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size: Math.random() * 2 + 1 + "px",
      delay: Math.random() * 2 + "s",
      duration: 1.5 + Math.random() * 2 + "s",
    }));
  }, []);

  return (
    <div className="home-background">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <div id="welcome-section" className="welcome-section">
        <h1>Hi, I'm Mel Guachun</h1>
        <h2>Software Engineer && Fine Artist</h2>

        {/* Profile Image */}
        <img
          src={favicon}
          alt="Mel Guachun"
          id="profile-img"
        />
      </div>
    </div>
  );
};

export default Home;
