import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/* Fixes two React Router (SPA) problems:
   1. Links like /about#founder open the page but never scroll to #founder.
   2. A new page opens at the old scroll position (for example the footer) instead of the top.

   Place it ONCE inside <BrowserRouter>, above <Routes>:

     <BrowserRouter>
       <ScrollToHash />
       <Header />
       <Routes>...</Routes>
       <Footer />
     </BrowserRouter>

   (With createBrowserRouter, put it in the root layout component that renders <Outlet />.)

   - Hash link: waits up to 2 seconds for the target element (works with lazy-loaded pages), then scrolls to it.
   - Page link without a hash: scrolls to the top.
   - Browser back/forward: leaves scrolling to the browser, so the old position is restored.
   - Clicking the same hash link again scrolls again (it depends on location.key). */

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (!hash) {
      if (navType !== "POP") window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
      if (++tries < 40) timer = setTimeout(go, 50);
    };
    go();
    return () => clearTimeout(timer);
  }, [pathname, hash, key, navType]);

  return null;
}