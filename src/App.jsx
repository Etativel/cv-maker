import "./App.css";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("Untitled");
  const [profile, setProfile] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [font, setFont] = useState("Times New Roman");

  useEffect(() => {
    if (data) {
      setProfile(data.personal || "");
      setEducation(data.education || []);
      setExperience(data.experience || []);
      setProjects(data.projects || []);
      setSkills(data.skills || []);
    }
  }, [data]);

  function onDataTemplate(dummyData) {
    console.log("hello");
    console.log(dummyData);
    setData(dummyData);
  }

  function clearState() {
    console.log("cleared");
    setFileName("Untitled");
    setData({});
    setProfile("");
    setEducation([]);
    setExperience([]);
    setProjects([]);
    setSkills([]);
  }

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
        fileName={fileName}
        setProfile={setProfile}
        setEducation={setEducation}
        setExperience={setExperience}
        setProjects={setProjects}
        setSkills={setSkills}
        setFont={setFont}
        setFileName={setFileName}
        clearState={clearState}
        setData={onDataTemplate}
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
