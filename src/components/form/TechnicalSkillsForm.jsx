/* eslint-disable react/prop-types */
import { useState } from "react";
import { TrashBinIcon, EditIcon } from "../../assets/icons/svgModule";
function SkillForm({ initialValues, onSubmit, onCancel }) {
  const [formValues, setFormValues] = useState(
    initialValues || {
      skillName: "",
      skillDetails: "",
    }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues({
      skillName: "",
      skillDetails: "",
    });
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="skill-name-input">
          <strong className="block-title ">Skill Name</strong>
        </label>
        <input
          type="text"
          id="skill-name-input"
          name="skillName"
          placeholder="Enter skill name"
          value={formValues.skillName}
          onChange={handleChange}
          required
          className="skill-name-input skill-input b-t-skill"
        />
      </div>
      <div className="form-group">
        <label htmlFor="skill-detail-input">
          <strong className="block-title ">Skill Details</strong>
        </label>
        <textarea
          //   type="text-area"
          id="skill-detail-input"
          name="skillDetails"
          placeholder="Enter skill details"
          value={formValues.skillDetails}
          onChange={handleChange}
          required
          className="skill-detail-input skill-input s-input"
        />
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

export default function SkillSection({ skills, setSkills }) {
  const [editIndex, setEditIndex] = useState(null);
  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const updateSkill = (updatedSkill, index) => {
    const updatedList = [...skills];
    updatedList[index] = updatedSkill;
    setSkills(updatedList);
    setEditIndex(null);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSkill = skills.filter((_, i) => i !== index);
    setSkills(updatedSkill);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };
  return (
    <>
      <div className="skill-details-container">
        <div className="skill-head">
          <p className="skill-detail-h1">Skill Details</p>
        </div>
        {skills.map((skill, index) => (
          <div key={index} className="skill-entry">
            {editIndex === index ? (
              <SkillForm
                initialValues={skill}
                onSubmit={(updatedSkill) => updateSkill(updatedSkill, index)}
                onCancel={handleCancelEdit}
              />
            ) : (
              <div className="submission-container">
                <div className="s-c-top">
                  <p className="submission-text-content">{skill.skillName}</p>
                  <p className="submission-sub-text-content">
                    {skill.skillDetails}
                  </p>
                </div>
                <div className="submission-btn">
                  <button
                    className="sub-btn "
                    onClick={() => handleEdit(index)}
                  >
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
        {editIndex === null && <SkillForm onSubmit={addSkill} />}
      </div>
    </>
  );
}
