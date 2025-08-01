import { useState } from "react";
import "./expander.css";
import csharp from "./../../assets/csharp.png";
import react from "./../../assets/react.png";
import xl_logo from "./../../assets/xl_logo.png";
import left_arrow from "../../assets/left_arrow.png";
import right_arrow from "../../assets/right_arrow.png";

export default function Expander() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`expander ${isExpanded ? "expanded" : ""}`}>
      <button
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img src={isExpanded ? left_arrow : right_arrow} />
      </button>

      {isExpanded && (
        <div className="expander-content">
          <div className="expander-content-header">
            <p>Thanks for using the</p>
            <div className="xlLogo">
              <img src={xl_logo} />
              <p>Excel Comparator App!</p>
            </div>
          </div>

          <div className="expander-content-body">
            <p>Made with</p>

            <div className="img-container">
              <img src={react} />
            </div>

            <div className="img-container">
              <img src={csharp} />
            </div>
          </div>

          <div className="expander-content-footer">
            <p>Developed by</p>
            <a
              href="https://www.linkedin.com/in/salvatore-amaddio-211a3710a/"
              target="_blank"
            >
              Salvatore Amaddio
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
