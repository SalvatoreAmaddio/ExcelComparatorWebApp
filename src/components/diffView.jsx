import React from "react";
import "./../css/ExcelView/diffView.css";

export default function DiffView({ lines }) {
  return (
    <div className="diff-line-container">
      {lines.map((line, i) => (
        <div key={i} className={`line-row type-${line.type}`}>
          {line.Type !== 3 && (
            <span className="line-position">{line.position}</span>
          )}
          <div className={`line-text-wrapper type-${line.type}`}>
            <LineText line={line} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LineText({ line }) {
  if (!line.subPieces || line.subPieces.length === 0) {
    return (
      <pre className={`line-text type-${line.type}`}>
        {changeTypeName(line.type)}
        {space(line.text)}
      </pre>
    );
  }

  return (
    <pre className={`line-text type-${line.type}`}>
      <span>{changeTypeName(line.type)}</span>
      {line.subPieces.map((piece, index) => {
        const isChanged = piece.type !== 0;
        return (
          <span key={index} className={isChanged ? "changed" : "unchanged"}>
            {space(piece.text)}
          </span>
        );
      })}
    </pre>
  );
}

// Helper: replace \t with 4 spaces (or adjust as needed)
function space(text) {
  if (text) return text.replace(/\t/g, "    ");
}

function changeTypeName(type) {
  switch (type) {
    case 0: //unchanged
    case 3: //"Imaginary"
      return "   ";
    case 1:
      return "-  ";
    case 2:
      return "+  ";
    case 4:
      return "✎ ";
    default:
      return type;
  }
}
