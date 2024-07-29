import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import config from "../data/config.json";
import Screen from "../Screen";
import Button from "@mui/material/Button";
import theme from "../Theme"; // Import the theme

const DynamicPage = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const screen = config.Screens.find((screen) => screen.ID === pageId);

  if (!screen) {
    return <div>Page not found</div>;
  }

  const handleAction = (action) => {
    if (action === "Cancel") {
      navigate(-1); // Go back
    } else if (action === "OK" || action === "Next") {
      const nextScreenId = screen.Next; // Get the next screen ID
      if (nextScreenId) {
        navigate(`/${nextScreenId}`);
      }
    } else {
      console.log(`Unhandled action: ${action}`);
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
              style={{ height: "100%" }}
            />
          );
        case "Title":
          return (
            <h1
              key={index}
              style={{
                color: theme.colors.header.text,
                fontSize: theme.fontSize.header,
              }}
            >
              {item.text}
            </h1>
          );
        case "Button":
          return (
            <Button
              key={index}
              onClick={() => handleAction(item.action)}
              variant={item.variant}
              style={{
                marginRight: item.marginRight,
                backgroundColor: theme.colors.button.primary.background,
                color: theme.colors.button.primary.color,
                fontSize: theme.fontSize.button,
              }}
            >
              {item.text}
            </Button>
          );
        default:
          return null;
      }
    });
  };

  const renderFooterItems = (items) => {
    return items.map((item, index) => {
      const color = item.color;
      switch (item.Type) {
        case "Button":
          return (
            <Button
              key={index}
              onClick={() => handleAction(item.action)}
              variant={item.variant}
              style={{
                marginRight: item.marginRight,
                backgroundColor: theme.colors.button[color].background,
                color: theme.colors.button[color].color,
                fontSize: theme.fontSize.button,
                width: item.width,
              }}
            >
              {item.text}
            </Button>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="layout">
      <header
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          height: "10vh",
          display: "flex",
          ...config.Header,
          backgroundColor: theme.colors.header.background,
        }}
      >
        {renderHeaderItems(config.Header.items)}
      </header>
      <Screen screen={screen} onAction={handleAction} />

      <footer
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
          display: "flex",
          bottom: "0",
          position: "fixed",
          ...config.Footer,
          backgroundColor: theme.colors.footer.background,
        }}
      >
        {screen.Footer ? renderFooterItems(screen.Footer.items) : null}
      </footer>
    </div>
  );
};

export default DynamicPage;
