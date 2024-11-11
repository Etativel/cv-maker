/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Sidebar.css";
import ProfileForm from "./form/PersonalForm";
import EducationSection from "./form/EducationForm";
import ExperienceSection from "./form/ExperienceForm";
import { downloadPDF } from "../utils/DownloadPdf";
export default function Sidebar({
  profile,
  education,
  experience,
  projects,
  skills,
  font,
  setProfile,
  setEducation,
  setExperience,
  setProjects,
  setSkills,
  setFont,
}) {
  return (
    <div className="sidebar">
      <ProfileForm profile={profile} setProfile={setProfile} />
      <EducationSection education={education} setEducation={setEducation} />
      <ExperienceSection
        experience={experience}
        setExperience={setExperience}
      />
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}
