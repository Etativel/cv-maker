/* eslint-disable react/prop-types */
import { useState } from "react";

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
      <div className="top-field">
        <div className="left-field">
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
        </div>
        <div className="right-field">
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
        </div>
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

export default function EducationSection({ education, setEducation }) {
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

  const handleDelete = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };
  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="education-details-container">
      <div className="education-head">
        <p className="education-detail-h1">Education</p>
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
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          )}
        </div>
      ))}

      {editIndex === null && <EducationForm onSubmit={addEducation} />}
    </div>
  );
}
