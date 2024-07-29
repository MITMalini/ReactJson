import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Label from "./Label";
import Entry from "./Entry";
import Button from "./Button";
import Image from "./Image";
import { useParams, useNavigate } from "react-router-dom";

const Screen = ({ screen, onAction }) => {
  const navigate = useNavigate();
  const handleAction = (action) => {
    navigate(`/${action}`);
  };
  const renderWidgets = (widgets) => {
    return widgets.map((widget, index) => {
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
              {...widget}
              Type={widget.Type}
              onClick={() => handleAction(widget.onClick)}
            />
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
      {console.log(screen.Widgets)}
    </Grid>
  );
};

Screen.propTypes = {
  screen: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Screen;
