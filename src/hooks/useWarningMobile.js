import { useState, useEffect } from "react";

export function useWarningMobile(breakpoint = 480) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      const match = window.innerWidth <= breakpoint;
      setIsMobile(match);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}