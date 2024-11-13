/* eslint-disable react/prop-types */
import { getGitHubUsername, getLinkedInUsername } from "../../utils/Formatter";
import { Fragment } from "react";
export default function ProfileDetails({ profile, font }) {
  const links = [
    profile.number && (
      <li key="number" className="profile-li">
        {profile.number}
      </li>
    ),
    profile.email && (
      <li key="email">
        <a className="profile-li" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </li>
    ),
    profile.linkedin && (
      <li key="linkedin">
        <a className="profile-li" href={profile.linkedin}>
          {getLinkedInUsername(profile.linkedin)}
        </a>
      </li>
    ),
    profile.github && (
      <li key="github">
        <a className="profile-li" href={profile.github}>
          {`${getGitHubUsername(profile.github)}`}
        </a>
      </li>
    ),
  ].filter(Boolean);
  return (
    <div className="name-and-link-container" style={{ fontFamily: font }}>
      <h1 className="h1-name">{profile.name}</h1>
      <ul className="profile-link-list-style profile-link">
        {links.map((link, index) => (
          <Fragment key={index}>
            {link}
            {index < links.length - 1 && <li className="separator">|</li>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
