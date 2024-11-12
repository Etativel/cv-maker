/* eslint-disable react/prop-types */

import { useState } from "react";

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
        <label htmlFor="project-start-date-input">
          <strong>Start Date</strong>
        </label>
        <input
          type="date"
          id="project-start-date-input"
          name="projectStartDate"
          value={formValues.projectStartDate}
          onChange={handleChange}
          className="project-start-date-input project-input"
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
          className="project-end-date-input project-input"
        />
      </div>

      <div className="project-details-list">
        <label>
          <strong>Project Details</strong>
        </label>
        {formValues.projectDetails.map((detail, index) => (
          <div key={index} className="project-detail-item">
            <textarea
              value={detail}
              onChange={(e) => handleProjectDetailChange(index, e.target.value)}
              placeholder={`Enter project detail ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleRemoveProjectDetail(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddProjectDetails}>
          Add Project Detail
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

export default function ProjectsSection({ projects, setProjects }) {
  const [editIndex, setEditIndex] = useState(null);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
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
            <>
              <p>
                <strong>Project Name:</strong> {proj.projectName}
              </p>
              <p>
                <strong>Project Stack:</strong> {proj.projectStack}
              </p>
              <p>
                <strong>Start Date:</strong> {proj.projectStartDate}
              </p>
              <p>
                <strong>End Date:</strong> {proj.projectEndDate}
              </p>
              <p>
                <strong>Project Details:</strong>
                <ul>
                  {proj.projectDetails.map((detail, idx) => (
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

      {editIndex === null && <ProjectForm onSubmit={addProject} />}
    </div>
  );
}
