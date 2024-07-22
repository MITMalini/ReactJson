import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Layout.css";
import config from "./data/config.json";
const Layout = ({ Layout, header, footer, children }) => {
  const renderCells = () => {
    const cells = {
      "cell-1": [],
      "cell-2": [],
      "cell-3": [],
      "cell-4": [],
      "cell-5": [],
      "cell-6": [],
      "cell-7": [],
      "cell-8": [],
      "cell-9": [],
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

    React.Children.forEach(children, (child) => {
      if (child.props.cell && cells[child.props.cell]) {
        cells[child.props.cell].push(child);
      }
    });

    return Object.keys(cells).map((cellKey, index) => (
      <Grid item xs={4} key={index} className="cell" style={{ marginTop: 10 }}>
        <Item>{cells[cellKey]}</Item>
      </Grid>
    ));
  };

  return (
    <div className="layout">
      <header>{header}</header>
      <Box style={{ height: "80vh", marginTop: "10vh" }}>
        <Grid container item spacing={1}>
          {renderCells()}
        </Grid>
      </Box>
      <footer>{footer}</footer>
    </div>
  );
};

Layout.propTypes = {
  layout: PropTypes.string.isRequired,
  header: PropTypes.string,
  footer: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
