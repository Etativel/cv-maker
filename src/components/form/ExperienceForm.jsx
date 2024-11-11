/* eslint-disable react/prop-types */
import { useState } from "react";

function ExperienceForm({ initialValues, onSubmit, onCancel }) {
  const [formValues, setFormValues] = useState(
    initialValues || {
      position: "",
      company: "",
      experienceDetails: [],
      experienceStartDate: "",
      experienceEndDate: "",
      companyCountry: "",
      companyCity: "",
    }
  );

  const handleAddExperienceDetail = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      experienceDetails: [...prevValues.experienceDetails, ""],
    }));
  };

  const handleExperienceDetailChange = (index, value) => {
    const updatedDetails = [...formValues.experienceDetails];
    updatedDetails[index] = value;
    setFormValues({ ...formValues, experienceDetails: updatedDetails });
  };

  const handleRemoveExperienceDetail = (index) => {
    const updatedDetails = formValues.experienceDetails.filter(
      (detail, i) => i !== index
    );
    setFormValues({ ...formValues, experienceDetails: updatedDetails });
  };

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
      position: "",
      company: "",
      experienceDetails: [],
      experienceStartDate: "",
      experienceEndDate: "",
      companyCountry: "",
      companyCity: "",
    });
  };

  return (
    <form className="experience-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="position-input">
          <strong>Position Title</strong>
        </label>
        <input
          type="text"
          id="position-input"
          name="position"
          placeholder="Enter position title"
          value={formValues.position}
          onChange={handleChange}
          required
          className="position-input experience-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="company-input">
          <strong>Company Name</strong>
        </label>
        <input
          type="text"
          id="company-input"
          name="company"
          placeholder="Enter company name"
          value={formValues.company}
          onChange={handleChange}
          required
          className="company-input experience-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience-start-date-input">
          <strong>Start Date</strong>
        </label>
        <input
          type="date"
          id="experience-start-date-input"
          name="experienceStartDate"
          value={formValues.experienceStartDate}
          onChange={handleChange}
          className="experience-start-date-input experience-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience-end-date-input">
          <strong>End Date</strong>
        </label>
        <input
          type="date"
          id="experience-end-date-input"
          name="experienceEndDate"
          value={formValues.experienceEndDate}
          onChange={handleChange}
          className="experience-end-date-input experience-input"
        />
      </div>

      <div className="experience-details-list">
        <label>
          <strong>Experience Details</strong>
        </label>
        {formValues.experienceDetails.map((detail, index) => (
          <div key={index} className="experience-detail-item">
            <textarea
              value={detail}
              onChange={(e) =>
                handleExperienceDetailChange(index, e.target.value)
              }
              placeholder={`Enter experience detail ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleRemoveExperienceDetail(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddExperienceDetail}>
          Add Experience Detail
        </button>
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

export default function ExperienceSection({ experience, setExperience }) {
  const [editIndex, setEditIndex] = useState(null);

  const addExperience = (newExperience) => {
    setExperience([...experience, newExperience]);
  };

  const updateExperience = (updatedExperience, index) => {
    const updatedList = [...experience];
    updatedList[index] = updatedExperience;
    setExperience(updatedList);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="experience-details-container">
      <div className="experience-head">
        <p className="experience-detail-h1">Experience Details</p>
      </div>

      {experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          {editIndex === index ? (
            <ExperienceForm
              initialValues={exp}
              onSubmit={(updatedExperience) =>
                updateExperience(updatedExperience, index)
              }
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <p>
                <strong>Position:</strong> {exp.position}
              </p>
              <p>
                <strong>Company:</strong> {exp.company}
              </p>
              <p>
                <strong>Start Date:</strong> {exp.experienceStartDate}
              </p>
              <p>
                <strong>End Date:</strong> {exp.experienceEndDate}
              </p>
              <p>
                <strong>Experience Details:</strong>
                <ul>
                  {exp.experienceDetails.map((detail, idx) => (
                    <li className="exp-li" key={idx}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          )}
        </div>
      ))}

      {editIndex === null && <ExperienceForm onSubmit={addExperience} />}
    </div>
  );
}
