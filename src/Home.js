// Home.js
import React, { useMemo } from "react";
import "./App.css";

const NUM_STARS = 150; // number of stars in the background

const Home = () => {
  // Generate random star positions and animation timing once
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
    <div className="home-background relative w-full h-screen overflow-hidden">
      {/* Twinkling stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="star absolute bg-white rounded-full"
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

      {/* Hero content */}
      <div id="welcome-section" className="welcome-section absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Mel Guachun
        </h1>
        <h2 className="text-lg md:text-xl text-gray-300 mb-6">
          Software Engineer
        </h2>
      </div>
    </div>
  );
};

export default Home;
