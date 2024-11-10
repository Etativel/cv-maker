/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/Sidebar.css";

function ProfileForm({ profile, setProfile }) {
  function handleProfile(e) {
    e.preventDefault();
    setProfile({
      name: document.querySelector(".name-input").value,
      number: document.querySelector(".phone-number-input").value,
      email: document.querySelector(".email-input").value,
      linkedin: document.querySelector(".linkedin-input").value,
      github: document.querySelector(".github-input").value,
    });
  }
  return (
    <>
      <form action="" className="profile-form" onSubmit={handleProfile}>
        <label htmlFor="">
          Your Name
          <input
            type="text"
            placeholder="Name"
            required
            className="name-input"
          />
        </label>
        <label htmlFor="">
          Your Phone Number
          <input
            type="text"
            placeholder="Phone number"
            required
            className="phone-number-input"
          />
        </label>
        <label htmlFor="">
          Contact Email
          <input
            type="email"
            placeholder="Email"
            required
            className="email-input"
          />
        </label>
        <label htmlFor="">
          Linkedin
          <input
            type="text"
            placeholder="Linkedin"
            className="linkedin-input"
          />
        </label>
        <label htmlFor="">
          Github
          <input type="text" placeholder="Github" className="github-input" />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
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
