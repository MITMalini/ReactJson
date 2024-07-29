import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Label from "./Label";
import Entry from "./Entry";
import Button from "./Button";
import Image from "./Image";
import theme from "./Theme"; // Import the theme

const Screen = ({ screen, onAction }) => {
  const renderWidgets = (widgets) => {
    return widgets.map((widget, index) => {
      const color = widget.color;
      switch (widget.Type) {
        case "Label":
          return <Label key={index} {...widget} />;
        case "Entry":
        case "Pass":
          return <Entry key={index} {...widget} Type={widget.Type} />;
        case "Button":
          return (
            <Button
              key={index}
              onClick={() => onAction(widget.Action)}
              variant={widget.variant}
              style={{
                marginRight: widget.marginRight,
                backgroundColor: theme.colors.button[color].background,
                color: theme.colors.button[color].color,
                fontSize: theme.fontSize.button,
                width: widget.width,
              }}
            >
              {widget.text}
            </Button>
          );
        case "Image":
          return <Image key={index} {...widget} />;
        default:
          return null;
      }
    });
  };

  return (
    <Grid container spacing={2}>
      {renderWidgets(screen.Widgets)}
    </Grid>
  );
};

Screen.propTypes = {
  screen: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Screen;
