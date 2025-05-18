import "./fileUploader.css";
import xlLogo from "./../../assets/xl_logo.png";
import SelectButton from "../selectButton/selectButton";

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
        <div className="test">
          <img id="xl-logo" src={xlLogo} />
          <div>
            <h3>Drag & Drop</h3>
            <SelectButton
              fileName={fileName}
              handleFileSelect={handleFileSelect}
              inputRef={inputRef}
              openDialog={openDialog}
            />
          </div>
        </div>
        <p className="supported-formats">
          Supported formats: XLS, XLSX, XLSM, XLSB, CSV
        </p>
        <p className="file-path">{fileName}</p>
      </div>
    </div>
  );
}
