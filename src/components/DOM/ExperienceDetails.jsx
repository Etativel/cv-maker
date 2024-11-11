/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function ExperienceDetails({ experience, font }) {
  return (
    <div className="experience-container" style={{ fontFamily: font }}>
      <div className="experience-head">Experience</div>
      <hr />
      <div className="experience-point-con">
        <div className="exp-1 exp-content">
          <div className="exp-info">
            <p className="experience-place">
              <strong>Undergraduate Research Assistant</strong>
            </p>
            <p className="experience-location">
              <i>Texas A&M University</i>
            </p>
          </div>
          <div className="exp-date">
            <p>June 2020 – Present</p>
            <p>
              <i>College Station, TX</i>
            </p>
          </div>
        </div>
        <ul className="exp-point">
          <li className="exp-desc">
            Developed a REST API using FastAPI and PostgreSQL to store data from
            learning management systems
          </li>
          <li className="exp-desc">
            Developed a full-stack web application using Flask, React,
            PostgreSQL and Docker to analyze GitHub data
          </li>
          <li className="exp-desc">
            Explored ways to visualize GitHub collaboration in a classroom
            setting
          </li>
        </ul>
      </div>

      <div className="experience-point-con">
        <div className="exp-1 exp-content">
          <div className="exp-info">
            <p className="experience-place">
              <strong>Information Technology Support Specialist</strong>
            </p>
            <p className="experience-location">
              <i>Southwestern University</i>
            </p>
          </div>
          <div className="exp-date">
            <p>Sep. 2018 – Present</p>
            <p>
              <i>Georgetown, TX</i>
            </p>
          </div>
        </div>
        <ul className="exp-point">
          <li className="exp-desc">
            Communicate with managers to set up campus computers used on campus
          </li>
          <li className="exp-desc">
            Assess and troubleshoot computer problems brought by students,
            faculty and staff
          </li>
          <li className="exp-desc">
            Maintain upkeep of computers, classroom equipment, and 200 printers
            across campus
          </li>
        </ul>
      </div>

      <div className="experience-point-con">
        <div className="exp-1 exp-content">
          <div className="exp-info">
            <p className="experience-place">
              <strong>Artificial Intelligence Research Assistant </strong>
            </p>
            <p className="experience-location">
              <i>Southwestern University</i>
            </p>
          </div>
          <div className="exp-date">
            <p>May 2019 – July 2019</p>
            <p>
              <i>Georgetown, TX</i>
            </p>
          </div>
        </div>
        <ul className="exp-point">
          <li className="exp-desc">
            Explored methods to generate video game dungeons based off of The
            Legend of Zelda
          </li>
          <li className="exp-desc">
            Developed a game in Java to test the generated dungeons
          </li>
          <li className="exp-desc">
            Contributed 50K+ lines of code to an established codebase via Git
          </li>
          <li className="exp-desc">
            Conducted a human subject study to determine which video game
            dungeon generation technique is enjoyable
          </li>
          <li className="exp-desc">
            Wrote an 8-page paper and gave multiple presentations on-campus
          </li>
          <li className="exp-desc">
            Presented virtually to the World Conference on Computational
            Intelligence
          </li>
        </ul>
      </div>
    </div>
  );
}
