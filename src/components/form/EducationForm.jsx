/* eslint-disable react/prop-types */
import { useState } from "react";
import { formatDate } from "../../utils/Formatter";

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
    <>
      <form className="education-form" onSubmit={handleSubmit}>
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
                required
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
                required
                className="edu-end-date-input education-input"
              />
            </div>
          </div>
        </div>
        <div className="s-e-c-container">
          <button className="form-add-btn" type="submit">
            Save
          </button>

          {onCancel && (
            <button
              className="form-cancel-btn"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default function EducationSection({ education, setEducation }) {
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const addEducation = (newEducation) => {
    setEducation([...education, newEducation]);
    setShowForm(false);
  };
  function handleShowForm() {
    setShowForm(true);
  }
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

  const handleCancelAdd = () => {
    setShowForm(false);
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
            <div className="submission-container">
              <div className="s-c-top">
                <p className="submission-text-content">
                  {edu.degree}
                  {" at "}
                  {edu.school}
                </p>
                <p className="submission-sub-text-content">
                  {formatDate(edu.eduStartDate)} {" - "}{" "}
                  {formatDate(edu.eduEndDate)}
                </p>
              </div>
              <div className="submission-btn">
                <button className="sub-btn " onClick={() => handleEdit(index)}>
                  <EditIcon />
                </button>
                <button
                  className="sub-btn "
                  onClick={() => handleDelete(index)}
                >
                  <TrashBinIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {editIndex === null &&
        (showForm ? (
          <EducationForm onSubmit={addEducation} onCancel={handleCancelAdd} />
        ) : (
          <button className="add-form-btn" onClick={handleShowForm}>
            + Add Education
          </button>
        ))}
    </div>
  );
}

import { EditIcon, TrashBinIcon } from "../../assets/icons/svgModule";
