import React from 'react';
import './css/TeamSection.css';

const TeamSection = ({ teamData }) => {
  const { header, main } = teamData;

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
            <p>{header.description}</p>
            </div>
            <div className="team-main">
              <p className="team-main-text">{main.text1}</p>
              <p className="team-main-text">{main.texto2}</p>
              <p className="team-main-text">{main.texto3.split('/n').join('\n')}</p>
              <p className="team-main-text">{main.text4.split('/n').join('\n')}</p>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default TeamSection;
