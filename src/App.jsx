import "./App.css";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({
    // name: "",
    // number: "",
    // email: "",
    // linkedin: "",
    // github: "",
    name: "Muhammad Farhan Maulana",
    number: "082145479632",
    email: "iusdeav@gmail.com",
    linkedin: "http://localhost:5173/",
    github: "http://localhost:5173/",
  });
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [projects, setProjects] = useState({});
  const [skills, setSkills] = useState({});
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
