import "./selectButton.css";

export default function SelectButton({
  inputRef,
  fileName,
  openDialog,
  handleFileSelect,
}) {
  return (
    <>
      <button className="select-file-btn" onClick={openDialog}>
        Choose
      </button>

      <input
        type="file"
        accept=".xls,.xlsx,.xlsm,.xlsb,.csv"
        multiple={false}
        title="Select an Excel File"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />

      <p className="file-path">{fileName}</p>
    </>
  );
}
