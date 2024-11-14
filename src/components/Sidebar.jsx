/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Sidebar.css";
import ProfileForm from "./form/PersonalForm";
import EducationSection from "./form/EducationForm";
import ExperienceSection from "./form/ExperienceForm";
import ProjectsSection from "./form/ProjectForm";
import SkillSection from "./form/TechnicalSkillsForm";
import SidebarHead from "./form/SidebarHead";
import SidebarNav from "./form/SidebarNav";
export default function Sidebar({
  profile,
  education,
  experience,
  projects,
  skills,
  font,
  fileName,
  setProfile,
  setEducation,
  setExperience,
  setProjects,
  setSkills,
  setFont,
  setFileName,
  clearState,
  setData,
}) {
  return (
    <div className="sidebar">
      <SidebarNav
        fileName={fileName}
        setFileName={setFileName}
        clearState={clearState}
        setData={setData}
      />
      <SidebarHead
        fileName={fileName}
        setFileName={setFileName}
        clearState={clearState}
        setData={setData}
      />
      <ProfileForm profile={profile} setProfile={setProfile} />
      <EducationSection education={education} setEducation={setEducation} />
      <ExperienceSection
        experience={experience}
        setExperience={setExperience}
      />
      <ProjectsSection projects={projects} setProjects={setProjects} />
      <SkillSection skills={skills} setSkills={setSkills} />
    </div>
  );
}
