import "./../css/home.css";
import "./../css/selectButton.css";
import { useFileSelector } from "./../hooks/useFileSelector";
import { useUpload } from "../hooks/useUpload";
import FileUploader from "../components/fileUploader";

export default function Home() {
  const {
    inputRef: inputRef1,
    fileName: fileName1,
    file: file1,
    openDialog: openDialog1,
    handleFileSelect: handleFileSelect1,
    handleDragOver: handleDragOver1,
    handleDrop: handleDrop1,
  } = useFileSelector();

  const {
    inputRef: inputRef2,
    fileName: fileName2,
    file: file2,
    openDialog: openDialog2,
    handleFileSelect: handleFileSelect2,
    handleDragOver: handleDragOver2,
    handleDrop: handleDrop2,
  } = useFileSelector();

  const { uploadClick } = useUpload({ file1, file2 });

  return (
    <div id="home-root">
      <header>
        <h1>WELCOME</h1>
        <h2>To the Excel Comparator Web App</h2>
      </header>

      <div id="container">
        <FileUploader
          inputRef={inputRef1}
          fileName={fileName1}
          openDialog={openDialog1}
          handleFileSelect={handleFileSelect1}
          handleDragOver={handleDragOver1}
          handleDrop={handleDrop1}
        />
        <FileUploader
          title="To this file"
          inputRef={inputRef2}
          fileName={fileName2}
          openDialog={openDialog2}
          handleFileSelect={handleFileSelect2}
          handleDragOver={handleDragOver2}
          handleDrop={handleDrop2}
        />
        <button className="select-file-btn inspect-btn" onClick={uploadClick}>
          SUBMIT
        </button>
      </div>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Salvatore Amaddio. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
