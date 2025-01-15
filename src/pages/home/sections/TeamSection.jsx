import React, { useState } from 'react';
import './css/TeamSection.css';

const TeamSection = ({ teamData }) => {
  const { header, main } = teamData;

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <>
      <h1 className='sectionTitle'>About Me</h1>
      <div className='headerSeparator'></div>
      <section id="team" className="team-section">
        <div className="team-header">
          <div className="team-header-image aspect-ratio">
            <img src={header.image} alt={header.title} />
          </div>
          <div className="team-header-content">
            <div className="team-top">
              <h2>{header.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: header.description }}></p>
            </div>
            <div className="team-main">
              <p
                className={`team-main-text strong ${isExpanded1 ? "open" : ""}`}
                onClick={() => setIsExpanded1(!isExpanded1)}
              >
                {main.title1}
              </p>
              {isExpanded1 && (
                <p className="team-main-text" dangerouslySetInnerHTML={{ __html: main.text1 }}></p>
              )}
              <p
                className={`team-main-text strong ${isExpanded2 ? "open" : ""}`}
                onClick={() => setIsExpanded2(!isExpanded2)}
              >
                {main.title2}
              </p>
              {isExpanded2 && (
                <p className="team-main-text" dangerouslySetInnerHTML={{ __html: main.text2 }}></p>
              )}
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default TeamSection;
