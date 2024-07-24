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

  const renderHeaderItems = (items) => {
    return items.map((item, index) => {
      switch (item.Type) {
        case "Logo":
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              style={{ height: item.height, paddingLeft: item.paddingLeft }}
            />
          );
        case "Title":
          return (
            <h1
              key={index}
              style={{ fontSize: item.fontSize, color: item.color }}
            >
              {item.text}
            </h1>
          );
        case "Button":
          return (
            <button key={index} onClick={() => handleAction(item.action)}>
              {item.text}
            </button>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div>
      <header style={config.Header}>
        {renderHeaderItems(config.Header.items)}
      </header>
      <Screen screen={screen} onAction={handleAction} />
      <footer style={config.Footer}></footer>
    </div>
  );
};

export default DynamicPage;
