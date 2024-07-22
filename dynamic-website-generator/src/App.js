import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DynamicPage from "../src/components/pages/DynamicPage";
import config from "./components/data/config.json";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect to the first screen if no specific screen is specified */}
          <Route
            path="/"
            element={<Navigate to={`/${config.Screens[0].ID}`} />}
          />

          {/* Capture the pageId parameter */}
          <Route path="/:pageId" element={<DynamicPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
