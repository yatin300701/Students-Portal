import React from "react";
import "../style/guidedPath.css";
import path from "../img/paths.jpg";
import home from "../img/home.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WebDevelopment from "./WebDevelopment";
import AppDevelopment from "./AppDevlopment";
import MachineDevelopment from "./MachineLearning";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GuidedPaths() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="guidedPathBody">
      <div className="gpHeading">
        <div className="gpHeading-left">
          <img src={path}></img>
          <h1>Guided Paths</h1>
        </div>
        <div className="gpHeading-right">
          <a href="/">
            <img src={home}></img>
          </a>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Web Devlopment" {...a11yProps(0)} />
            <Tab label="App Development" {...a11yProps(1)} />
            <Tab label="Machine Learning" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <WebDevelopment />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AppDevelopment />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MachineDevelopment />
        </TabPanel>
      </Box>
    </div>
  );
}
