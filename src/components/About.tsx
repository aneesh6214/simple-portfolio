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
          Born and raised in the San Francisco Bay Area, I've had exposure to
          the multiple aspects of the tech industry. Not only do I have the technical skill, but <span className="about-text-emphasis"> I am a creative & articulate engineer </span> with an emphasis on communication and collaboration.
          <br />
          <br />
          <span className="about-text-emphasis">Aside from my time in the tech world-</span> I enjoy watching TV, playing videogames, going
          to concerts, and hiking.
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
