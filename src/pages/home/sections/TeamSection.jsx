import React, { useState } from 'react';
import './css/TeamSection.css';
import './css/StaffTeamCard.css';

const TeamSection = ({ teamData }) => {
  const { header, main } = teamData;

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isTeamDescriptionExpanded, setIsTeamDescriptionExpanded] = useState(true);

  return (
    <>
      <h1 className="sectionTitle">About Me</h1>
      <div className="headerSeparator"></div>
      <section id="team" className="team-section">
        <div className="team-header">
          <div className="team-header-image aspect-ratio">
            <img src={header.team_image} alt={header.team_title} />
          </div>
          <div className="team-header-content">
            <div className="team-top">
              <h2
                className={`team-title strong ${isTeamDescriptionExpanded ? "open" : ""}`}
                onClick={() => setIsTeamDescriptionExpanded(!isTeamDescriptionExpanded)}
              >
                {header.team_title}
              </h2>
              {isTeamDescriptionExpanded && (
                <p
                  className="team-description"
                  dangerouslySetInnerHTML={{ __html: header.team_description }}
                ></p>
              )}
            </div>

            <div className="team-main">
              <p
                className={`team-main-text strong ${isExpanded1 ? "open" : ""}`}
                onClick={() => setIsExpanded1(!isExpanded1)}
              >
                {main.team_first_title}
              </p>
              {isExpanded1 && (
                <div
                  className="team-main-text"
                  dangerouslySetInnerHTML={{ __html: main.team_first_text }}
                ></div>
              )}

              <p
                className={`team-main-text strong ${isExpanded2 ? "open" : ""}`}
                onClick={() => setIsExpanded2(!isExpanded2)}
              >
                {main.team_second_title}
              </p>
              {isExpanded2 && (
                <div className="team-staff">
                  <div className="staff-cards">
                    <div className="staff-row">
                      {Object.values(main.team_staff)
                        .slice(0, 2)
                        .map((staff, index) => (
                          <div className="staff-card" key={index}>
                            <img
                              src={staff.staff_image}
                              alt={staff.staff_name}
                              className="staff-card-image"
                            />
                            <div className="staff-card-info">
                              <h4>{staff.staff_name}</h4>
                              <p>{staff.staff_phone}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="staff-row">
                      {Object.values(main.team_staff)
                        .slice(2, 4)
                        .map((staff, index) => (
                          <div className="staff-card" key={index}>
                            <img
                              src={staff.staff_image}
                              alt={staff.staff_name}
                              className="staff-card-image"
                            />
                            <div className="staff-card-info">
                              <h4>{staff.staff_name}</h4>
                              <p>{staff.staff_phone}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
