import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [location]);

  if (loading) return <Loading />;
  return children;
}

export default PageLoader;
