import { xlSheet } from "./xlSheet";

export default function xlFile({ data }) {

  const fileName1 = data.fileName1;
  const fileName2 = data.fileName2;

  const sheets = data.pages.map((sheetData) => new xlSheet(sheetData));
  
  const sheetCount = sheets.length;

  return {
    fileName1,
    fileName2,
    sheetCount,
    sheets, // array of { name, newLines, oldLines }
  };
}