/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  SideBar,
  DownloadIcon,
  ResetIcon,
  LoadIcon,
} from "../../assets/icons/svgModule";
import { toggleStyle } from "../../utils/ToggleStyle";
import { downloadPDF } from "../../utils/DownloadPdf";
import { alexSmith } from "../../utils/DummyData";
import githubIcon from "../../assets/icons/github.png";
function DropDown({ fileName, clearState, setData, handleSetShowDropDown }) {
  return (
    <>
      <div className="dropdown-menu">
        <button
          onClick={() => {
            downloadPDF(fileName);
            handleSetShowDropDown();
          }}
          className="drop-download drop-btn"
        >
          <DownloadIcon /> Download Resume
        </button>
        <button
          onClick={() => {
            setData(alexSmith);
            handleSetShowDropDown();
          }}
          className="drop-load drop-btn"
        >
          <LoadIcon /> Load a Template
        </button>
        <button
          onClick={() => {
            clearState();
            handleSetShowDropDown();
          }}
          className="drop-clear drop-btn"
        >
          <ResetIcon /> Clear Resume
        </button>
      </div>
    </>
  );
}
export default function SidebarNav({ fileName, clearState, setData }) {
  const [showDropDown, setShowDropDown] = useState(false);
  function handleSetShowDropDown() {
    const dropDown = document.querySelector(".dropdown-menu");
    setShowDropDown(!showDropDown);
    toggleStyle(dropDown, "show-dropdown-menu");
  }
  return (
    <>
      <div className="s-nav-container">
        <button className="home-btn">
          <a className="repo-link" href="https://github.com/Etativel/cv-maker">
            <img className="github-icon" src={githubIcon} alt="" />
            Resume Builder
          </a>
        </button>
        <button onClick={handleSetShowDropDown} className="sidebar-btn">
          <SideBar />
        </button>
      </div>
      <div className="dropdown-container">
        <DropDown
          handleSetShowDropDown={handleSetShowDropDown}
          fileName={fileName}
          clearState={clearState}
          setData={setData}
        />
      </div>
    </>
  );
}
