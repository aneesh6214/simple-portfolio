import React, { useState } from "react";
import "./About.scss";

const About: React.FC = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="about-text">
      I am a full stack and AI developer skilled in Python.
      <span className="about-text-emphasis">
        {" "}
        I learn fast and value deep knowledge.{" "}
      </span>
      {isReadMore && (
        <>
          <br />
          Born and raised in the San Francisco Bay Area, I've had exposure to
          the multiple aspects of the tech industry.
          <br />
          <br />
          In my free time, I enjoy watching TV/Movies, playing videogames, going
          to music shows, and hiking.
        </>
      )}
      <br />
      <span onClick={toggleReadMore} className="read-more-btn">
        {isReadMore ? "Less About Me" : "More About Me"}
      </span>
    </div>
  );
};

export default About;
