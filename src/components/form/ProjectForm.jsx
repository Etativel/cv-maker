/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function ProjectForm({ initialValues, onSubmit, onCancel }) {
  const [formValues, setFormValues] = useState(
    initialValues || {
      projectName: "",
      projectStack: "",
      projectDetails: [],
      projectDate: "",
    }
  );

  const handleAddProjectDetails = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      projectDetails: [...prevValues.projectDetails, ""],
    }));
  };

  const handleProjectDetailChange = (index, value) => {};

  const handleChange = (e) => {
    const [name, value] = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };
}

export default function ProjectsSection({ projects, setProjects }) {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
