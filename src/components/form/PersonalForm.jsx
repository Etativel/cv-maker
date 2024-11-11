/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function ProfileForm({ profile, setProfile }) {
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
