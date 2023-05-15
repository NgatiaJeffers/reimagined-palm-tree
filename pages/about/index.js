import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";

import BreadCrumb from "../../components/atoms/Breadcrumb";
import OurStory from "../components/about-children/OurStory";

import shape from "../../public/shape2.png";
import image from "../../public/diff.jpg";
import OurMission from "../components/about-children/OurMission";
import OurVision from "../components/about-children/OurVision";
import OurServices from "../components/about-children/OurServices";
import MeetTheTean from "../components/about-children/MeetTheTeam";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelly={`full-width-tab-${index}`}
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

TabPanel.PropTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(90deg, rgba(58,202,232,1) 7%, rgba(224,116,74,1) 50%, rgba(58,202,232,1) 100%)",
    boxShadow: "none !important",

    "& .MuiPaper-root.MuiAppBar-root": {
      boxShadow: "none",
    },
  },

  isSticky: {
    position: "fixed !important",
    top: "100px",
    zIndex: "1",
  },

  tabBar: {
    "& .MuiTabs-flexContainer": {
      height: "70px !important",
    },

    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: "15px",
      textTransform: "none",
      fontWeight: "700",
      transition: ".5s",
    },

    "& .MuiTabs-indicator": {
      background:
        "radial-gradient(circle, rgba(255,131,27,1) 0%, rgba(3,173,236,1) 100%)",
    },
  },
});

const AboutPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      {/* <BreadCrumb title={"About Us"} /> */}
      <section>
        <Box>
          <AppBar
            className={`${classes.root} ${classes.isSticky}`}
            position="static"
          >
            <Tabs
              className={classes.tabBar}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width"
              centered
            >
              <Tab label="Our Story" {...allyProps(0)} />
              <Tab label="Our Services" {...allyProps(1)} />
              <Tab label="Meet The Team" {...allyProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <OurStory />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <OurServices />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <MeetTheTean />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </section>
    </>
  );
};

export default AboutPage;
