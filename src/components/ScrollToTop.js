import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.pathname !== '/') { 
        document.title = 'BusinesSoft | ' + window.location.pathname.replace('/', '');
    } else {
      document.title = 'BusinesSoft - The Inteligent Software';
    }
  }, [pathname]);

  return null;
}
