/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Sidebar.css";

function ProfileForm({ profile, setProfile }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({
      name: document.querySelector(".name-input").value,
      number: document.querySelector(".phone-number-input").value,
      email: document.querySelector(".email-input").value,
      linkedin: document.querySelector(".linkedin-input").value,
      github: document.querySelector(".github-input").value,
    });
  };
  return (
    <div className="personal-details-container">
      <div className="profile-head">
        <p className="personal-detail-h1">Personal Details</p>
        {/* <button className="hide-personal-details" onClick={showPersonalDetails}>
          Edit
        </button> */}
      </div>
      <form action="" className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name-input">
            <strong>Your Name</strong>
          </label>
          <input
            onChange={handleSubmit}
            type="text"
            id="name-input"
            placeholder="Name"
            required
            className="name-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number-input">
            <strong>Your Phone Number</strong>
          </label>
          <input
            onChange={handleSubmit}
            type="text"
            id="phone-number-input"
            placeholder="Phone number"
            required
            className="phone-number-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-input">
            <strong>Contact Email</strong>
          </label>
          <input
            onChange={handleSubmit}
            type="email"
            id="email-input"
            placeholder="Email"
            required
            className="email-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin-input">
            <strong>Linkedin</strong>
          </label>
          <input
            onChange={handleSubmit}
            type="text"
            id="linkedin-input"
            placeholder="Linkedin"
            className="linkedin-input personal-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="github-input">
            <strong>Github</strong>
          </label>
          <input
            onChange={handleSubmit}
            type="text"
            id="github-input"
            placeholder="Github"
            className="github-input personal-input"
          />
        </div>
        {/* <button type="submit">Add</button> */}
      </form>
    </div>
  );
}

function EducationForm({ initialValues, onSubmit, onCancel }) {
  const [formValues, setFormValues] = useState(
    initialValues || {
      school: "",
      degree: "",
      eduCity: "",
      eduCountry: "",
      eduStartDate: "",
      eduEndDate: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues({
      school: "",
      degree: "",
      eduCity: "",
      eduCountry: "",
      eduStartDate: "",
      eduEndDate: "",
    });
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="school-input">
          <strong>School</strong>
        </label>
        <input
          type="text"
          id="school-input"
          name="school"
          placeholder="Enter school / university"
          value={formValues.school}
          onChange={handleChange}
          required
          className="school-input education-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="degree-input">
          <strong>Degree</strong>
        </label>
        <input
          type="text"
          id="degree-input"
          name="degree"
          placeholder="Enter degree / Field of study"
          value={formValues.degree}
          onChange={handleChange}
          required
          className="degree-input education-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="edu-city-input">
          <strong>City</strong>
        </label>
        <input
          type="text"
          id="edu-city-input"
          name="eduCity"
          placeholder="Enter city"
          value={formValues.eduCity}
          onChange={handleChange}
          required
          className="edu-city-input education-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="edu-country-input">
          <strong>Country</strong>
        </label>
        <input
          type="text"
          id="edu-country-input"
          name="eduCountry"
          placeholder="Enter country"
          value={formValues.eduCountry}
          onChange={handleChange}
          className="edu-country-input education-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="edu-start-date-input">
          <strong>Start Date</strong>
        </label>
        <input
          type="date"
          id="edu-start-date-input"
          name="eduStartDate"
          value={formValues.eduStartDate}
          onChange={handleChange}
          className="edu-start-date-input education-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="edu-end-date-input">
          <strong>End Date</strong>
        </label>
        <input
          type="date"
          id="edu-end-date-input"
          name="eduEndDate"
          value={formValues.eduEndDate}
          onChange={handleChange}
          className="edu-end-date-input education-input"
        />
      </div>
      <button type="submit">{initialValues ? "Save" : "Add"}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

function EducationSection({ education, setEducation }) {
  const [editIndex, setEditIndex] = useState(null);

  const addEducation = (newEducation) => {
    setEducation([...education, newEducation]);
  };

  const updateEducation = (updatedEducation, index) => {
    const updatedList = [...education];
    updatedList[index] = updatedEducation;
    setEducation(updatedList);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="education-details-container">
      <div className="education-head">
        <p className="education-detail-h1">Education Details</p>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          {editIndex === index ? (
            <EducationForm
              initialValues={edu}
              onSubmit={(updatedEducation) =>
                updateEducation(updatedEducation, index)
              }
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <p>
                <strong>School:</strong> {edu.school}
              </p>
              <p>
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p>
                <strong>City:</strong> {edu.eduCity}
              </p>
              <p>
                <strong>Country:</strong> {edu.eduCountry}
              </p>
              <p>
                <strong>Start Date:</strong> {edu.eduStartDate}
              </p>
              <p>
                <strong>End Date:</strong> {edu.eduEndDate}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </div>
      ))}

      {editIndex === null && <EducationForm onSubmit={addEducation} />}
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
      <ProfileForm profile={profile} setProfile={setProfile} />
      <EducationSection education={education} setEducation={setEducation} />
    </div>
  );
}
