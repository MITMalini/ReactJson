import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Screen from "../Screen";
import Button from "@mui/material/Button";
import theme from "../Theme"; // Import the theme

const DynamicPage = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://172.25.164.252:7575/start?devrole=machine")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setConfig(data);
        setLoading(false);
        console.log("dynamiccomponent.js", data);
      })
      .catch((error) => {
        console.error("Error fetching config:", error);
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

  // Find the screen based on pageId, or show a fallback if not found
  const screen = config.Screens.find((screen) => screen.ID === pageId);
  console.log("pageId:", pageId);
  console.log("config.Screens:", config.Screens);
  console.log("Selected screen:", screen);

  if (!screen) {
    return <div>Screen not found for ID: {pageId}</div>;
  }

  const handleAction = (action) => {
    if (action === "back") {
      navigate(-1); // Go back
    } else if (action === "login" || action === "Next") {
      const nextScreenId = screen.FooterWidgets?.NextScreen; // Get the next screen ID
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
              src={item.Src}
              alt={item.Alt}
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
              {item.Text}
            </h1>
          );
        case "Button":
          return (
            <Button
              key={index}
              onClick={() => handleAction(item.Action)}
              variant={item.variant}
              style={{
                marginRight: item.marginRight,
                backgroundColor: theme.colors.button.primary.background,
                color: theme.colors.button.primary.color,
                fontSize: theme.fontSize.button,
              }}
            >
              {item.Text}
            </Button>
          );
        default:
          return null;
      }
    });
  };

  const renderFooterItems = (items) => {
    return items.map((item, index) => {
      const color = item.Color;
      switch (item.Type) {
        case "Button":
          return (
            <Button
              key={index}
              onClick={() => handleAction(item.Action)}
              variant={item.variant}
              style={{
                marginRight: item.marginRight,
                backgroundColor: theme.colors.button[color].background,
                color: theme.colors.button[color].color,
                fontSize: theme.fontSize.button,
                width: item.width,
              }}
            >
              {item.Text}
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
          backgroundColor: theme.colors.header.background,
        }}
      >
        {renderHeaderItems(config.HeaderWidgets)}
      </header>
      <Screen screen={screen} onAction={handleAction} />

      <footer
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "10vh",
          display: "flex",
          bottom: "0",
          position: "fixed",
          backgroundColor: theme.colors.footer.background,
        }}
      >
        {screen.FooterWidgets ? renderFooterItems(screen.FooterWidgets) : null}
      </footer>
    </div>
  );
};

export default DynamicPage;
