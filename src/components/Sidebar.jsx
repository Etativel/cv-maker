/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Sidebar.css";

function ProfileForm({ profile, setProfile }) {
  const [visibility, setVisibility] = useState("visible");
  const profileSection = document.querySelector(".name-and-link-container");
  function handleProfile(e) {
    e.preventDefault();
    setProfile({
      name: document.querySelector(".name-input").value,
      number: document.querySelector(".phone-number-input").value,
      email: document.querySelector(".email-input").value,
      linkedin: document.querySelector(".linkedin-input").value,
      github: document.querySelector(".github-input").value,
    });
    profileSection.classList.add("showed");
  }
  // function handleVisibility() {
  //   const profileSection = document.querySelector(".name-and-link-container");
  //   if (!visibility) {
  //     profileSection.classList.add("showed");
  //   } else {
  //     profileSection.classList.add("hidden");
  //   }
  //   setVisibility(!visibility);
  // }
  function hidePersonalDetails() {
    const profileForm = document.querySelector(".profile-form");
    profileForm.classList.toggle("hide");
  }
  return (
    <div className="personal-details-container">
      <div className="profile-head">
        <p className="personal-detail-h1">Personal Details</p>
        <button className="hide-personal-details" onClick={hidePersonalDetails}>
          Hide
        </button>
      </div>
      <form action="" className="profile-form" onSubmit={handleProfile}>
        <div className="form-group">
          <label htmlFor="name-input">
            <strong>Your Name</strong>
          </label>
          <input
            type="text"
            id="name-input"
            placeholder="Name"
            required
            className="name-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number-input">Your Phone Number</label>
          <input
            type="text"
            id="phone-number-input"
            placeholder="Phone number"
            required
            className="phone-number-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-input">Contact Email</label>
          <input
            type="email"
            id="email-input"
            placeholder="Email"
            required
            className="email-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin-input">Linkedin</label>
          <input
            type="text"
            id="linkedin-input"
            placeholder="Linkedin"
            className="linkedin-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="github-input">Github</label>
          <input
            type="text"
            id="github-input"
            placeholder="Github"
            className="github-input personal-input"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

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
      <ProfileForm profile={profile.name} setProfile={setProfile} />
    </div>
  );
}
