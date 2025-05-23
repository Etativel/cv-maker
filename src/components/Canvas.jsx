/* eslint-disable react/prop-types */
import "../styles/Canvas.css";
import ProfileDetails from "./DOM/ProfileDetails";
import EducationDetails from "./DOM/EducationDetails";
import ExperienceDetails from "./DOM/ExperienceDetails";
import ProjectDetails from "./DOM/ProjectDetails";
import TechnicalSkillsDetails from "./DOM/TechnicalSkillsDetails";

function Paper({ profile, education, experience, projects, skills, font }) {
  return (
    <div className="paper">
      <ProfileDetails profile={profile} font={font} />
      <EducationDetails education={education} font={font} />
      <ExperienceDetails experience={experience} font={font} />
      <ProjectDetails projects={projects} font={font} />
      <TechnicalSkillsDetails skills={skills} font={font} />
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
    <div className="canvas-container">
      <div className="canvas">
        <Paper
          profile={profile}
          education={education}
          experience={experience}
          projects={projects}
          skills={skills}
          font={font}
        />
      </div>
    </div>
  );
}
