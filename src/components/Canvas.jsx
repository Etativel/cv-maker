/* eslint-disable react/prop-types */
import "../styles/Canvas.css";
// import html2pdf from "html2pdf.js";
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

function ProjectSection() {
  return (
    <div className=".projects-container">
      <div className="project-head">Projects</div>
      <hr />
      <div className="project-point-con">
        <div className="proj-1 proj-content">
          <div className="proj-info">
            <p className="project-name">
              <strong>Gitlytics</strong>
            </p>
            <p className="vertical-line-break"> | </p>
            <p className="project-skill">
              <i>Python, Flask, React, PostgreSQL, Docker</i>
            </p>
          </div>
          <div className="proj-date">
            <p>June 2020 – Present</p>
          </div>
        </div>
        <ul className="proj-point">
          <li className="proj-desc">
            Developed a full-stack web application using with Flask serving a
            REST API with React as the frontend
          </li>
          <li className="proj-desc">
            Implemented GitHub OAuth to get data from user’s repositories
          </li>
          <li className="proj-desc">
            Visualized GitHub data to show collaboration
          </li>
          <li className="proj-desc">
            Used Celery and Redis for asynchronous tasks
          </li>
        </ul>
      </div>

      <div className="project-point-con">
        <div className="proj-1 proj-content">
          <div className="proj-info">
            <p className="project-name">
              <strong>Simple Paintball</strong>
            </p>
            <p className="vertical-line-break"> | </p>
            <p className="project-skill">
              <i>Spigot API, Java, Maven, TravisCI, Git</i>
            </p>
          </div>
          <div className="proj-date">
            <p>May 2018 – May 2020</p>
          </div>
        </div>
        <ul className="proj-point">
          <li className="proj-desc">
            Developed a Minecraft server plugin to entertain kids during free
            time for a previous job
          </li>
          <li className="proj-desc">
            Published plugin to websites gaining 2K+ downloads and an average
            4.5/5-star review
          </li>
          <li className="proj-desc">
            Implemented continuous delivery using TravisCI to build the plugin
            upon new a release
          </li>
          <li className="proj-desc">
            Collaborated with Minecraft server administrators to suggest
            features and get feedback about the plugin
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
        <ProjectSection font={"san-serif"} />
      </div>
    </div>
  );
}
