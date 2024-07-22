import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Screen from "../Screen";
import config from "../data/config.json";

const DynamicPage = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();

  console.log("pageId:", pageId); // Verify pageId value
  console.log("Screens:", config.Screens); // Verify config.Screens

  const screen = config.Screens.find((screen) => screen.ID === pageId);
  console.log("screen:", screen); // Verify if the screen is found

  if (!screen) {
    return <div>Page not found</div>;
  }

  const handleAction = (action) => {
    if (action === "Cancel") {
      navigate(-1); // Go back
    } else if (action === "OK" || action === "Next") {
      const nextScreen = config.Screens.find((s) => s.ID === screen.Next);
      if (nextScreen) {
        navigate(`/${nextScreen.ID}`);
      }
    }
  };

  return (
    <div>
      <Screen screen={screen} onAction={handleAction} />
    </div>
  );
};

export default DynamicPage;
