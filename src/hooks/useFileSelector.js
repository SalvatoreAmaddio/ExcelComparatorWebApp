import { useRef, useState } from "react";
import { useDialogMessage } from "./useDialogsMessage";

export function useFileSelector() {
  const {displayError} = useDialogMessage();
  const allowedExtensions = [".xls", ".xlsx", ".xlsm", ".xlsb", ".csv"];
  const errTitle = "Invalid File Type";
  const errMsg = `Please select a valid Excel file.<br><br>Allowed extentions: ${allowedExtensions.join(", ")}`;
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  function openDialog()
  {
    inputRef.current?.click();
  }

  function handleDrop(e)
  {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const file = e.dataTransfer.files?.[0];

    if (!file)
      return;

    const selectedFileName = file.name.toLowerCase();

    if (!isValidFile(selectedFileName))
    {
      displayError(errTitle, errMsg);
      return;
    }

    setFile(file);
    setFileName(selectedFileName);
  }

  function handleDragOver(e)
  {
    return e.preventDefault();
  }

  function handleFileSelect(e)
  {
    const file = e.target.files?.[0];

    if (!file) 
      return;

    const selectedFileName = file.name.toLowerCase();

    if (!isValidFile(selectedFileName))
    {
      displayError(errTitle, errMsg);
      e.target.value = "";
      return;
    }

    setFile(file);
    setFileName(selectedFileName);
  }

  function isValidFile(fileName)
  {
    return allowedExtensions.some((ext) => fileName.endsWith(ext));
  }


  return {
    inputRef,
    fileName,
    file,
    handleDrop,
    handleDragOver,
    openDialog,
    handleFileSelect,
  };
}