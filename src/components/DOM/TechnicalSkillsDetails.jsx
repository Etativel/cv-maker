/* eslint-disable react/prop-types */

function TechnicalSkillsDetailsComponent({ skills }) {
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <div key={index} className="skill-info">
            <p className="skill-name">
              <strong>{skill.skillName}:</strong>
            </p>
            <p className="vertical-line-break"></p>
            <p className="skills">
              <i>{skill.skillDetails}</i>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default function TechnicalSkillsDetails({ skills, font }) {
  return (
    <div className="skill-container" style={{ fontFamily: font }}>
      {skills.length > 0 && (
        <>
          <div className="skill-head">Technical Skills</div>
          <hr />
          <div className="skill-1 skill-content">
            <TechnicalSkillsDetailsComponent skills={skills} />
          </div>
        </>
      )}
    </div>
  );
}
