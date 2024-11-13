/* eslint-disable no-unused-vars */
import "./App.css";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { useState } from "react";
import { jakeRyan, emilyClarke } from "./utils/DummyData";
const dummy = jakeRyan;

function App() {
  const [profile, setProfile] = useState(dummy.personal);
  const [education, setEducation] = useState(dummy.education);
  const [experience, setExperience] = useState(dummy.experience);
  const [projects, setProjects] = useState(dummy.projects);
  const [skills, setSkills] = useState(dummy.skills);
  const [font, setFont] = useState("Times New Roman");

  return (
    <div className="container">
      <Sidebar
        className="sidebar-container"
        profile={profile}
        education={education}
        experience={experience}
        projects={projects}
        skills={skills}
        font={font}
        setProfile={setProfile}
        setEducation={setEducation}
        setExperience={setExperience}
        setProjects={setProjects}
        setSkills={setSkills}
        setFont={setFont}
      />

      <Canvas
        className="canvas-container"
        profile={profile}
        education={education}
        experience={experience}
        projects={projects}
        skills={skills}
        font={font}
      />
    </div>
  );
}

export default App;
