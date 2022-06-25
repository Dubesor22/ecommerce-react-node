import React from "react";
import video1 from "../../assets/video/videoIntro.mp4";

const Intro = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
