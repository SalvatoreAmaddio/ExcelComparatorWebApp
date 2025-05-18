import "./diffView.css";
import { FixedSizeList as List } from "react-window";

export default function DiffView({ lines }) {
  const ROW_HEIGHT = 24;

  return (
    <List
      height={ref?.current?.clientHeight || 400} // fallback height
      width="100%"
      itemCount={lines.length}
      itemSize={ROW_HEIGHT}
    >
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
    </List>
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
