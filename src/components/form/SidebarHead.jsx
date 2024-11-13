/* eslint-disable react/prop-types */
import { downloadPDF } from "../../utils/DownloadPdf";
import { alexSmith } from "../../utils/DummyData";

export default function SidebarHead({
  fileName,
  setFileName,
  clearState,
  setData,
}) {
  return (
    <div className="sidebar-head">
      <div className="file-name">
        {" "}
        <input
          type="text"
          value={fileName}
          className="file-name-input"
          required
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>
      <div className="div-head-btn">
        <button onClick={clearState} className="s-h-btn clear-all">
          Clear All
        </button>
        <button
          onClick={() => downloadPDF(fileName)}
          className="s-h-btn download"
        >
          Download
        </button>
        <button
          onClick={() => setData(alexSmith)}
          className="s-h-btn load-template"
        >
          Load Template
        </button>
      </div>
    </div>
  );
}
