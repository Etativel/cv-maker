/* eslint-disable react/prop-types */
export default function ProfileDetails({ profile, font }) {
  return (
    <div className="name-and-link-container" style={{ fontFamily: font }}>
      <h1 className="h1-name">{profile.name}</h1>
      <ul className="profile-link-list-style profile-link">
        <li className="profile-li">{profile.number}</li>
        {profile.email && <li>|</li>}
        <li>
          <a className="profile-li" href="#">
            {profile.email}
          </a>
        </li>
        {profile.linkedin && <li>|</li>}
        <li>
          <a
            className="profile-li"
            href={profile.linkedin !== "" ? profile.linkedin : "#"}
          >
            {profile.linkedin && `linkedin.com/in/`}

            {profile.linkedin
              ? profile.name.includes(" ")
                ? profile.name.split(" ")[0].toLowerCase()
                : profile.name.toLowerCase()
              : ""}
          </a>
        </li>
        {profile.github && <li>|</li>}
        <li>
          <a
            className="profile-li"
            href={profile.github !== "" ? profile.github : "#"}
          >
            {profile.github && `github.com/`}

            {profile.github
              ? profile.name.includes(" ")
                ? profile.name.split(" ")[0].toLowerCase()
                : profile.name.toLowerCase()
              : ""}
          </a>
        </li>
      </ul>
    </div>
  );
}
