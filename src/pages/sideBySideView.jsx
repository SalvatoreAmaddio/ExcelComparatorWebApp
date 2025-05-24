import { useLocation } from "react-router-dom";
import { useWarningMobile } from "./../hooks/useWarningMobile";
import Expander from "../components/expander/expander";
import "./../css/sideBySideView.css";
import xlFile from "../data_structures/xlFile";
import SheetTabs from "../components/sheetTabs/sheetTabs";
import MobileWarning from "../components/mobileWarning/mobileWarning";

export default function SideBySideView() {
  const location = useLocation();
  const response = location.state;
  const file = xlFile({ data: response.data });
  const isMobile = useWarningMobile();

  return (
    <>
      {isMobile ? (
        <MobileWarning />
      ) : (
        <div className="main-container">
          <div className="content grid-setup">
            <SheetTabs file={file} />
            <div className="content-footer ">
              <p>Identified {file.sheetCount} sheet(s) with changes</p>
            </div>
          </div>
          <Expander />
        </div>
      )}
    </>
  );
}
