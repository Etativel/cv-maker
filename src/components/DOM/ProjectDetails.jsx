/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function ProjectDetails({ projects, font }) {
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
