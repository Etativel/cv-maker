/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function EducationDetails({ education, font }) {
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
