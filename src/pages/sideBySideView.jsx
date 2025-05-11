import { useLocation } from "react-router-dom";
import Expander from "../components/expander";
import "./../css/ExcelView/sideBySideView.css";
import xlFile from "../data_structures/xlFile";
import SheetTabs from "../components/SheetTabs";

export default function SideBySideView() {
  const location = useLocation();
  const response = location.state;
  const file = xlFile({ data: response.data });

  return (
    <div className="main-container">
      <div className="content grid-setup">
        <SheetTabs file={file} />
        <div className="content-footer ">
          <p>Identified {file.sheetCount} sheet(s) with changes</p>
        </div>
      </div>

      <Expander />
    </div>
  );
}
