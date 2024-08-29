import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DynamicPage from "./components/pages/DynamicPage";

const App = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://172.25.164.252:7575/start?devrole=machine")
      .then((response) => {
        if (!response.ok) {
          throw new Error(` 1 HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setConfig(data);
        setLoading(false);
        console.log("app.js", data);
      })
      .catch((error) => {
        console.error("2 Error fetching config:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show an error message if config data failed to load
  if (!config) {
    return <div>Error loading configuration. Please try again later.</div>;
  }
  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect to the first screen if no specific screen is specified */}
          {config.Screens && config.Screens.length > 0 && (
            <Route
              path="/"
              element={<Navigate to={`/${config.StartScreen}`} />}
            />
          )}

          {/* Define route for dynamic pages */}
          <Route path="/:pageId" element={<DynamicPage />} />

          {/* Fallback route for undefined paths */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
