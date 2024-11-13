/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/Formatter";
function ExperienceComponent({ experience }) {
  return (
    <>
      {experience.map((exp, index) => (
        <div key={index} className="experience-point-con">
          <div className={`exp-${index} exp-content`}>
            <div className="exp-info">
              <p className="experience-place">
                <strong>{exp.position}</strong>
              </p>
              <p className="experience-location">
                <i>{exp.company}</i>
              </p>
            </div>
            <div className="exp-date">
              <p>
                {formatDate(exp.experienceStartDate)} –{" "}
                {formatDate(exp.experienceEndDate)}
              </p>
              <p>
                <i>
                  {exp.companyCountry}, {exp.companyCity}
                </i>
              </p>
            </div>
          </div>
          <ul className="exp-point">
            {exp.experienceDetails.map((detail, index) => {
              return (
                <>
                  <li key={index} className="exp-desc">
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
export default function ExperienceDetails({ experience, font }) {
  return (
    <div className="experience-container" style={{ fontFamily: font }}>
      {experience.length > 0 && (
        <>
          <div className="experience-head">Experience</div>
          <hr />
          <ExperienceComponent experience={experience} />
        </>
      )}
    </div>
  );
}
