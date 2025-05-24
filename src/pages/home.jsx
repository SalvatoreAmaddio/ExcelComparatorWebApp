import "./../css/home.css";
import { useFileSelector } from "./../hooks/useFileSelector";
import { useUpload } from "../hooks/useUpload";
import { useRef } from "react";
import FileUploader from "../components/fileUploader/fileUploader";
import swap from "./../assets/swap.png";

export default function Home() {
  const {
    inputRef: inputRef1,
    fileName: fileName1,
    file: file1,
    openDialog: openDialog1,
    handleFileSelect: handleFileSelect1,
    handleDragOver: handleDragOver1,
    handleDrop: handleDrop1,
    setFile: setFile1,
    setFileName: setFileName1,
  } = useFileSelector();

  const {
    inputRef: inputRef2,
    fileName: fileName2,
    file: file2,
    openDialog: openDialog2,
    handleFileSelect: handleFileSelect2,
    handleDragOver: handleDragOver2,
    handleDrop: handleDrop2,
    setFile: setFile2,
    setFileName: setFileName2,
  } = useFileSelector();

  const { uploadClick } = useUpload({ file1, file2 });

  const compRef = useRef(null);

  const onSwapClick = () => {
    setFile1(file2);
    setFileName1(fileName2);

    setFile2(file1);
    setFileName2(fileName1);
  };

  return (
    <div id="home-root">
      <header>
        <h1>WELCOME</h1>
        <h2>To the Excel Comparator Web App</h2>
      </header>

      <div id="container">
        <FileUploader
          ref={compRef}
          inputRef={inputRef1}
          fileName={fileName1}
          openDialog={openDialog1}
          handleFileSelect={handleFileSelect1}
          handleDragOver={handleDragOver1}
          handleDrop={handleDrop1}
        />
        <div id="swap-icon" onClick={onSwapClick}>
          <img src={swap} />
          <p>Swap</p>
        </div>
        <FileUploader
          title="To this file"
          inputRef={inputRef2}
          fileName={fileName2}
          openDialog={openDialog2}
          handleFileSelect={handleFileSelect2}
          handleDragOver={handleDragOver2}
          handleDrop={handleDrop2}
        />
        <button className="inspect-btn select-file-btn" onClick={uploadClick}>
          COMPARE
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
