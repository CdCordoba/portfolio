import React from "react";
import video from "./video/backgroundCoding.mp4";
import "./styles.css";

export default function Landing() {
  return (
    <div className="video">
      <div className="overlay">
        <div className="container container-video">
          <h2>
            Christian Córdoba <span>FullStack developer</span>
          </h2>
          <p>
            Hello! My name is Christian Córdoba and I am a Full Stack web
            developer who is passionate about team work and organization. As for
            the individual, my work is oriented to the Front-end and user
            experience.
          </p>
        </div>
      </div>
      <video autoPlay={true} muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
