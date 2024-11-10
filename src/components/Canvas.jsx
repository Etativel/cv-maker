/* eslint-disable react/prop-types */
import "../styles/Canvas.css";
function NameAndLinks({ font }) {
  return (
    <div className="name-and-link-container" style={{ fontFamily: font }}>
      <h1 className="h1-name">Jake Ryan</h1>
      <ul className="profile-link-list-style profile-link">
        <li>123-456-789</li>
        <li>|</li>
        <li>
          <a href="#">user@gmail.com</a>
        </li>
        <li>|</li>
        <li>
          <a href="#">linkedin.com/in/jake</a>
        </li>
        <li>| </li>
        <li>
          <a href="#">github.com/jake</a>
        </li>
      </ul>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="education-container">
      <div className="education-head">Education</div>
      <hr />
      <div className="edu-1 edu-content">
        <div className="edu-info">
          <p className="education-place">
            <strong>Southwestern University</strong>
          </p>
          <p className="education-info">
            <i>Bachelor of Arts in Computer Science, Minor in Business</i>
          </p>
        </div>
        <div className="edu-date">
          <p>Georgetown, TX</p>
          <p>
            <i>Aug. 2018 - May 2021</i>
          </p>
        </div>
      </div>
      <div className="edu-1 edu-content">
        <div className="edu-info">
          <p className="education-place">
            <strong>Blinn College</strong>
          </p>
          <p className="education-info">
            <i>Associate’s in Liberal Arts</i>
          </p>
        </div>
        <div className="edu-date">
          <p>Bryan, TX</p>
          <p>
            <i>Aug. 2014 – May 2018</i>
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="experience-container">
      <div className="experience-head">Experience</div>
      <hr />
      <div className="experience-point-con">
        <div className="exp-1 exp-content">
          <div className="exp-info">
            <p className="experience-place">
              <strong>Undergraduate Research Assistant</strong>
            </p>
            <p className="experience-info">
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
            <p className="experience-info">
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
            faculty and staf
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
            <p className="experience-info">
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

export default function Canvas() {
  return (
    <div className="canvas">
      <div className="paper">
        <NameAndLinks font={"san-serif"} />
        <EducationSection font={"san-serif"} />
        <ExperienceSection font={"san-serif"} />
      </div>
    </div>
  );
}
