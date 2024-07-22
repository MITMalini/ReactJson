import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import Entry from "./Entry";
import Button from "./Button";
import Layout from "./Layout";

const Screen = ({ screen, onAction }) => {
  const renderWidgets = (widgets) => {
    return widgets.map((widget, index) => {
      switch (widget.Type) {
        case "Label":
          return <Label key={index} {...widget} />;
        case "Entry":
        case "Pass":
          return (
            <Entry
              key={index}
              {...widget}
              type={widget.Type === "Pass" ? "password" : "text"}
            />
          );
        case "Button":
          return (
            <Button
              key={index}
              {...widget}
              onClick={() => onAction(widget.Action)}
            />
          );
        default:
          return null;
      }
    });
  };

  const renderCells = () => {
    return Object.keys(screen.Widgets).map((cellKey) => (
      <div key={cellKey} className={`cell ${cellKey}`}>
        {renderWidgets(screen.Widgets[cellKey])}
      </div>
    ));
  };

  return (
    <Layout
      layout={screen.Layout}
      header={screen.Header}
      footer={screen.Footer}
    >
      {renderCells()}
    </Layout>
  );
};

Screen.propTypes = {
  screen: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Screen;
