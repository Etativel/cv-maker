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
          <p className="education-place">Southwestern University</p>
          <p className="education-info">
            Bachelor of Arts in Computer Science, Minor in Business
          </p>
        </div>
        <div className="edu-date">
          <p>Georgetown, TX</p>
          <p>Aug. 2018 - May 2021</p>
        </div>
      </div>
      <div className="edu-1 edu-content">
        <div className="edu-info">
          <p className="education-place">Southwestern University</p>
          <p className="education-info">
            Bachelor of Arts in Computer Science, Minor in Business
          </p>
        </div>
        <div className="edu-date">
          <p>Georgetown, TX</p>
          <p>Aug. 2018 - May 2021</p>
        </div>
      </div>
    </div>
  );
}

export default function Canvas() {
  return (
    <div className="canvas">
      <div className="paper">
        <NameAndLinks font={"san-serif"} />
        <EducationSection />
      </div>
    </div>
  );
}
