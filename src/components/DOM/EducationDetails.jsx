/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/Formatter";
function EducationComponent({ education }) {
  return (
    <>
      {education.map((edu, index) => (
        <div key={index} className={`edu-${index} edu-content`}>
          <div className="edu-info">
            <p className="education-place">
              <strong>{edu.school}</strong>
            </p>
            <p className="education-info">
              <i>{edu.degree}</i>
            </p>
          </div>
          <div className="edu-date">
            <p>
              {edu.eduCity}, {edu.eduCountry}
            </p>
            <p>
              <i>
                {formatDate(edu.eduStartDate)} - {formatDate(edu.eduEndDate)}
              </i>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default function EducationDetails({ education, font }) {
  return (
    <div className="education-container" style={{ fontFamily: font }}>
      {education.length > 0 && (
        <>
          <div className="education-head">Education</div>
          <hr />
          <EducationComponent education={education} />
        </>
      )}
    </div>
  );
}
