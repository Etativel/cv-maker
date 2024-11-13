/* eslint-disable react/prop-types */
import { useState } from "react";
import removeIcon from "../../assets/icons/recycle-bin.png";
import { formatDate } from "../../utils/Formatter";
import { EditIcon, TrashBinIcon } from "../../assets/icons/svgModule";
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
      <div className="top-field">
        <div className="left-field">
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
        </div>
        <div className="right-field">
          <div className="form-group">
            <label htmlFor="city-input">
              <strong>City</strong>
            </label>
            <input
              type="text"
              id="city-input"
              name="companyCity"
              placeholder="Enter company city"
              value={formValues.companyCity}
              onChange={handleChange}
              required
              className="city-input experience-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country-input">
              <strong>Country</strong>
            </label>
            <input
              type="text"
              id="country-input"
              name="companyCountry"
              placeholder="Enter company country"
              value={formValues.companyCountry}
              onChange={handleChange}
              required
              className="country-input experience-input"
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
        </div>
      </div>

      <div className="experience-details-list">
        <label>
          <strong className="block-title">Experience Details</strong>
        </label>
        {formValues.experienceDetails.map((detail, index) => (
          <div key={index} className="experience-detail-item">
            <textarea
              className="e-d-input"
              value={detail}
              onChange={(e) =>
                handleExperienceDetailChange(index, e.target.value)
              }
              placeholder={`Detail ${index + 1}`}
            />
            <button
              type="button"
              className="e-d-remove-btn"
              onClick={() => handleRemoveExperienceDetail(index)}
            >
              <img className="remove-icon" src={removeIcon} alt="" />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="add-btn-list"
          onClick={handleAddExperienceDetail}
        >
          + Add Details
        </button>
      </div>

      <div className="s-e-c-container">
        <button className="form-add-btn" type="submit">
          {initialValues ? "Save" : "Add"}
        </button>
        {onCancel && (
          <button className="form-cancel-btn" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
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
        <p className="experience-detail-h1">Experience</p>
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
            <div className="submission-container">
              <div className="s-c-top">
                <p className="submission-text-content">
                  {exp.position}
                  {" at "}
                  {exp.company}
                </p>
                <p className="submission-sub-text-content">
                  {formatDate(exp.experienceStartDate)} {" - "}{" "}
                  {formatDate(exp.experienceEndDate)}
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

      {editIndex === null && <ExperienceForm onSubmit={addExperience} />}
    </div>
  );
}
