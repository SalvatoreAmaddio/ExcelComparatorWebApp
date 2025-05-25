import { useRef, useState, useEffect } from "react";
import "./sheetTabs.css";
import DiffView from "./../diffView/diffView";

export default function SheetTabs({ file }) {
  const [activeTab, setActiveTab] = useState(0); // default to first tab
  const [showChangesOnly, setShowChangesOnly] = useState(retrieveFlag());
  const sheets = file.sheets;
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const parentLeftHeight = useRef(null);
  const parentRightHeight = useRef(null);

  sheets.map((sheet) => sheet.filter(showChangesOnly));

  useEffect(() => {
    sheets.map((sheet) => sheet.filter(showChangesOnly));
    saveFlag();
  }, [showChangesOnly]);

  useEffect(() => {
    setShowChangesOnly(retrieveFlag());
  }, [activeTab]);

  function saveFlag() {
    sessionStorage.setItem(
      "flag_" + activeTab,
      JSON.stringify(showChangesOnly)
    );
  }

  function retrieveFlag() {
    const data = sessionStorage.getItem("flag_" + activeTab);
    return JSON.parse(data) ?? true;
  }

  // Scroll‐sync effect
  useEffect(() => {
    const leftEl = leftRef.current;
    const rightEl = rightRef.current;
    if (!leftEl || !rightEl) return;

    let isSyncingLeft = false;
    let isSyncingRight = false;

    const onLeftScroll = () => {
      if (isSyncingLeft) {
        isSyncingLeft = false;
        return;
      }
      isSyncingRight = true;
      rightEl.scrollTop = leftEl.scrollTop;
    };

    const onRightScroll = () => {
      if (isSyncingRight) {
        isSyncingRight = false;
        return;
      }
      isSyncingLeft = true;
      leftEl.scrollTop = rightEl.scrollTop;
    };

    leftEl.addEventListener("scroll", onLeftScroll);
    rightEl.addEventListener("scroll", onRightScroll);
    return () => {
      leftEl.removeEventListener("scroll", onLeftScroll);
      rightEl.removeEventListener("scroll", onRightScroll);
    };
  }, [activeTab]);

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
          <div className="diff-line-container" ref={parentLeftHeight}>
            <DiffView
              lines={sheets[activeTab].oldLines}
              ref={leftRef}
              parentRef={parentLeftHeight}
            />
          </div>
          <div className="divider" />
          <div className="diff-line-container" ref={parentRightHeight}>
            <DiffView
              lines={sheets[activeTab].newLines}
              ref={rightRef}
              parentRef={parentRightHeight}
            />
          </div>
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
