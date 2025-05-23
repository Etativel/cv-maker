/* eslint-disable react/prop-types */
import removeIcon from "../../assets/icons/recycle-bin.png";
import { EditIcon, TrashBinIcon } from "../../assets/icons/svgModule";
import { useState } from "react";
import { formatDate } from "../../utils/Formatter";

function ProjectForm({ initialValues, onSubmit, onCancel }) {
  const [formValues, setFormValues] = useState(
    initialValues || {
      projectName: "",
      projectStack: "",
      projectDetails: [],
      projectStartDate: "",
      projectEndDate: "",
    }
  );

  const handleAddProjectDetails = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      projectDetails: [...prevValues.projectDetails, ""],
    }));
  };

  const handleProjectDetailChange = (index, value) => {
    const updatedDetails = [...formValues.projectDetails];
    updatedDetails[index] = value;
    setFormValues({ ...formValues, projectDetails: updatedDetails });
  };

  const handleRemoveProjectDetail = (index) => {
    const updatedDetails = formValues.projectDetails.filter(
      (detail, i) => i !== index
    );
    setFormValues({ ...formValues, projectDetails: updatedDetails });
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
      projectName: "",
      projectStack: "",
      projectDetails: [],
      projectStartDate: "",
      projectEndDate: "",
    });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="top-field">
        <div className="left-field">
          <div className="form-group">
            <label htmlFor="project-name-input">
              <strong>Project Name</strong>
            </label>
            <input
              type="text"
              id="project-name-input"
              name="projectName"
              placeholder="Enter project name"
              value={formValues.projectName}
              onChange={handleChange}
              required
              className="project-name-input project-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="project-start-date-input">
              <strong>Start Date</strong>
            </label>
            <input
              type="date"
              id="project-start-date-input"
              name="projectStartDate"
              value={formValues.projectStartDate}
              onChange={handleChange}
              required
              className="project-start-date-input project-input"
            />
          </div>
        </div>
        <div className="right-field">
          <div className="form-group">
            <label htmlFor="project-stack-input">
              <strong>Project Stack</strong>
            </label>
            <input
              type="text"
              id="project-stack-input"
              name="projectStack"
              placeholder="Enter project stacks"
              value={formValues.projectStack}
              onChange={handleChange}
              required
              className="project-stack-input project-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="project-end-date-input">
              <strong>End Date</strong>
            </label>
            <input
              type="date"
              id="project-end-date-input"
              name="projectEndDate"
              value={formValues.projectEndDate}
              onChange={handleChange}
              required
              className="project-end-date-input project-input"
            />
          </div>
        </div>
      </div>

      <div className="project-details-list">
        <label>
          <strong className="block-title">Project Details</strong>
        </label>
        {formValues.projectDetails.map((detail, index) => (
          <div key={index} className="project-detail-item">
            <textarea
              className="e-d-input"
              value={detail}
              onChange={(e) => handleProjectDetailChange(index, e.target.value)}
              placeholder={`Detail ${index + 1}`}
            />
            <button
              type="button"
              className="e-d-remove-btn"
              onClick={() => handleRemoveProjectDetail(index)}
            >
              <img className="remove-icon" src={removeIcon} alt="" />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="add-btn-list"
          onClick={handleAddProjectDetails}
        >
          + Add Details
        </button>
      </div>

      <div className="s-e-c-container">
        <button className="form-add-btn" type="submit">
          Save
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

export default function ProjectsSection({ projects, setProjects }) {
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
    setShowForm(false);
  };

  const updateProject = (updatedProject, index) => {
    const updatedList = [...projects];
    updatedList[index] = updatedProject;
    setProjects(updatedList);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProject = projects.filter((_, i) => i !== index);
    setProjects(updatedProject);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  const handleCancelAdd = () => {
    setShowForm(false);
  };

  return (
    <div className="project-details-container">
      <div className="project-head">
        <p className="project-detail-h1">Project Details</p>
      </div>

      {projects.map((proj, index) => (
        <div key={index} className="project-entry">
          {editIndex === index ? (
            <ProjectForm
              initialValues={proj}
              onSubmit={(updatedProject) =>
                updateProject(updatedProject, index)
              }
              onCancel={handleCancelEdit}
            />
          ) : (
            <div className="submission-container">
              <div className="s-c-top">
                <p className="submission-text-content">
                  {proj.projectName}
                  {" with "}
                  {proj.projectStack}
                </p>
                <p className="submission-sub-text-content">
                  {formatDate(proj.projectStartDate)} {" - "}{" "}
                  {formatDate(proj.projectEndDate)}
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
          <ProjectForm onSubmit={addProject} onCancel={handleCancelAdd} />
        ) : (
          <button className="add-form-btn" onClick={() => setShowForm(true)}>
            + Add Project
          </button>
        ))}
    </div>
  );
}
