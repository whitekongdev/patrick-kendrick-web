import React from 'react';
import './VideoPlayer.css';
import videoSrc from '../../assets/images/IMG_9633.MP4';

// const presentation = ({ imageUrl }) => (
// <section class="hero-section">
//   <div class="hero">
//     <div class="hero-image-container">
//       <img src={imageUrl} alt="Hero" className="hero-image" />
//     </div>
//     <div class="hero-text">
//       <h1 className="hero-title">
//         <span>Unlock the Art</span> <br />
//         <span>of Real</span> <br />
//         <span>Estate Expertise</span>
//       </h1>
//       <button className="hero-button">Book Your showrun Now</button>

//     </div>
//   </div>
// </section>
// );

const VideoPlayer = ({ src, controls = true, autoplay = true, loop = true, muted = false, height = "400" }) => {
  return (
      <video
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        style={{ width: "100%" }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
};


export default VideoPlayer;