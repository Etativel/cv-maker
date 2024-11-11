/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function TechnicalSkillsDetails({ skills, font }) {
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
