/* eslint-disable react/prop-types */

import { formatDate } from "../../utils/Formatter";
function ProjectDetailsComponent({ projects }) {
  return (
    <>
      {projects.map((proj, index) => (
        <div key={index} className="project-point-con">
          <div className={`proj-${index} proj-content`}>
            <div className="proj-info">
              <p className="project-name">
                <strong>{proj.projectName}</strong>
              </p>
              <p className="vertical-line-break"> | </p>
              <p className="project-skill">
                <i>{proj.projectStack}</i>
              </p>
            </div>
            <div className="proj-date">
              <p>
                {formatDate(proj.projectStartDate)} –{" "}
                {formatDate(proj.projectEndDate)}
              </p>
            </div>
          </div>
          <ul className="proj-point">
            {proj.projectDetails.map((detail, index) => {
              return (
                <>
                  <li key={index} className="proj-desc">
                    {detail}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function ProjectDetails({ projects, font }) {
  return (
    <div className="projects-container" style={{ fontFamily: font }}>
      {projects.length > 0 && (
        <>
          <div className="project-head">Projects</div>
          <hr />
          <ProjectDetailsComponent projects={projects} />
        </>
      )}
    </div>
  );
}
