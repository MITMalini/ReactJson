import React from "react";
import Label from "./Label";
import Entry from "./Entry";
import Button from "./Button";

const Screen = ({ screen, onAction }) => {
  const renderWidget = (widget) => {
    switch (widget.Type) {
      case "Label":
        return <Label key={widget.Text} {...widget} />;
      case "Entry":
      case "Pass":
        return (
          <Entry
            key={widget.ID}
            {...widget}
            type={widget.Type === "Pass" ? "password" : "text"}
          />
        );
      case "Button":
        return (
          <Button
            key={widget.Text}
            {...widget}
            onClick={() => onAction(widget.Action)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {screen.Widgets.map(renderWidget)}
      {screen.Buttons.map(renderWidget)}
    </div>
  );
};

export default Screen;
