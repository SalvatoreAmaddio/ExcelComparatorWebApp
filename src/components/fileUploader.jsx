import "./../css/fileUploader.css";
import xlLogo from "./../assets/xl_logo.png";
import SelectButton from "./selectButton";

export default function FileUploader({
  inputRef,
  fileName,
  openDialog,
  handleFileSelect,
  handleDragOver,
  handleDrop,
  title = "Compare this file",
}) {
  return (
    <div className="file-uploader-outer-container">
      <div
        className="file-uploader-inner-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <span>{title}</span>
        <img id="xl-logo" src={xlLogo} />
        <h3>Drag & Drop the Excel file here</h3>
        <h3>OR</h3>
        <SelectButton
          fileName={fileName}
          handleFileSelect={handleFileSelect}
          inputRef={inputRef}
          openDialog={openDialog}
        />
      </div>
    </div>
  );
}
