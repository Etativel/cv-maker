/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/Canvas.css";

function NameAndLinks({ profile, font }) {
  return (
    <div className="name-and-link-container" style={{ fontFamily: font }}>
      <h1 className="h1-name">{profile.name}</h1>
      <ul className="profile-link-list-style profile-link">
        <li className="profile-li">{profile.number}</li>
        <li>|</li>
        <li>
          <a className="profile-li" href="#">
            {profile.email}
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            className="profile-li"
            href={profile.linkedin !== "" ? profile.linkedin : "#"}
          >
            linkedin.com/in/
            {profile.name.split(" ")[0].toLowerCase()}
          </a>
        </li>
        <li>| </li>
        <li>
          <a
            className="profile-li"
            href={profile.github !== "" ? profile.github : "#"}
          >
            github.com/
            {profile.name.split(" ")[0].toLowerCase()}
          </a>
        </li>
      </ul>
    </div>
  );
}

function EducationSection({ education, font }) {
  return (
    <div className="education-container" style={{ fontFamily: font }}>
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

function ExperienceSection({ experience, font }) {
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

function ProjectSection({ projects, font }) {
  return (
    <div className="projects-container" style={{ fontFamily: font }}>
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

function TechnicalSkillSection({ skills, font }) {
  return (
    <div className="skill-container" style={{ fontFamily: font }}>
      <div className="skill-head">Technical Skills</div>
      <hr />
      <div className="skill-point-con">
        <div className="skill-1 skill-content">
          <div className="skill-info-container">
            <div className="skill-info">
              <p className="skill-name">
                <strong>Languages:</strong>
              </p>
              <p className="vertical-line-break"></p>
              <p className="skills">
                <i>
                  Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R
                </i>
              </p>
            </div>
            <div className="skill-info">
              <p className="skill-name">
                <strong>Frameworks:</strong>
              </p>
              <p className="vertical-line-break"></p>
              <p className="skills">
                <i>
                  React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI
                </i>
              </p>
            </div>
            <div className="skill-info">
              <div className="skill-name">
                <strong>Developer Tools:</strong>
              </div>
              <div className="vertical-line-break"></div>
              <div className="skills">
                <i>
                  Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual
                  Studio, PyCharm, IntelliJ, Eclipse
                </i>
              </div>
            </div>
            <div className="proj-info">
              <p className="skill-name">
                <strong>Libraries:</strong>
              </p>
              <p className="vertical-line-break"></p>
              <p className="skills">
                <i>pandas, NumPy, Matplotlib</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paper({ profile, education, experience, projects, skills, font }) {
  return (
    <div className="paper">
      <NameAndLinks profile={profile} font={font} />
      <EducationSection education={education} font={font} />
      <ExperienceSection experience={experience} font={font} />
      <ProjectSection projects={projects} font={font} />
      <TechnicalSkillSection skills={skills} font={font} />
    </div>
  );
}

// Canvas Component
export default function Canvas({
  profile,
  education,
  experience,
  projects,
  skills,
  font,
}) {
  return (
    <div className="canvas">
      <Paper
        profile={profile}
        education={education}
        experience={experience}
        projects={projects}
        skills={skills}
        font={font}
      />
      {/* <Paper
        profile={profile}
        education={education}
        experience={experience}
        projects={projects}
        skills={skills}
        font={font}
      /> */}
    </div>
  );
}
