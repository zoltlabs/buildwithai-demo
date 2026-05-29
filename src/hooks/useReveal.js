import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on navigation. (Scroll-reveal animations were removed; the
// .reveal class is now inert and elements are visible immediately.)
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
