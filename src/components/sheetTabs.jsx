import { useState, useEffect } from "react";
import "./../css/ExcelView/sheetTabs.css";
import DiffView from "./diffView";

export default function SheetTabs({ file }) {
  const [activeTab, setActiveTab] = useState(0); // default to first tab
  const [showChangesOnly, setShowChangesOnly] = useState(true);
  const sheets = file.sheets;
  sheets.map((sheet) => sheet.filter(showChangesOnly));

  useEffect(() => {
    sheets.map((sheet) => sheet.filter(showChangesOnly));
  }, [showChangesOnly]);

  return (
    <div className="grid-setup tab-container">
      <div className="sheet-content view-grid">
        <div className="view-header">
          <label>Show changes only </label>
          <input
            type="checkbox"
            checked={showChangesOnly}
            onChange={(e) => {
              setShowChangesOnly(e.target.checked);
            }}
          />
        </div>
        <div className="fileNames">
          <div className="leftName">
            <p>{file.fileName1}</p>
          </div>
          <div className="rightName">
            <p>{file.fileName2}</p>
          </div>
        </div>
        <div className="viewContainer">
          <DiffView lines={sheets[activeTab].oldLines} />
          <div className="divider" />
          <DiffView lines={sheets[activeTab].newLines} />
        </div>
      </div>

      <div className="tabs">
        {sheets.map((sheet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={
              index == activeTab ? "selected-button" : "unselected-button"
            }
          >
            {sheet.name}
          </button>
        ))}
      </div>
    </div>
  );
}
