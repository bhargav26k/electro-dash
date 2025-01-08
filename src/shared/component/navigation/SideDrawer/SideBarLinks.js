import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(3),
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  activeLink: {
    backgroundColor: theme.palette.action.selected,
  },
  sidebar: {
    maxHeight: "100vh", // Limit height to viewport
    overflowY: "auto", // Allow scrolling
    paddingRight: theme.spacing(2),
    scrollbarWidth: "thin", // Firefox: Thin scrollbar
    scrollbarColor: `${theme.palette.primary.main} transparent`, // Firefox: Custom scrollbar colors
    "&::-webkit-scrollbar": {
      width: "3px", // Chrome/Safari/Edge: Thin scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main, // Chrome/Safari/Edge: Scrollbar color
      borderRadius: "25px", // Chrome/Safari/Edge: Rounded scrollbar
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent", // Chrome/Safari/Edge: Transparent scrollbar track
    },
  },
}));

const SideBarLinks = () => {
  const classes = useStyles();

  // Initialize all sections as open
  const [openSections, setOpenSections] = useState({
    Master: true,
    Transaction: true,
    Report: true,
    "MIS Report": true,
  });

  const handleToggle = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const menuStructure = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      submenus: [
        { title: "DashBoard", path: "/", icon: <HomeIcon /> },
      ],
    },
    {
      title: "Master",
      icon: <SettingsIcon />,
      submenus: [
        { title: "New Consumer Entry", path: "/new-consumer-entry", icon: <PersonIcon /> },
        { title: "Consumer Detail", path: "/consumer-detail", icon: <HomeIcon /> },
        { title: "Designation", path: "/designation", icon: <ListAltIcon /> },
        { title: "User Level Setting", path: "/user-level-setting", icon: <BuildIcon /> },
        { title: "Tariff Size", path: "/tariff-size", icon: <EqualizerIcon /> },
        { title: "Zone", path: "/zone", icon: <DashboardIcon /> },
        { title: "Bit", path: "/bit", icon: <MonetizationOnIcon /> },
        { title: "Construction Type", path: "/construction-type", icon: <BuildIcon /> },
        { title: "Connection (Tariff) Type", path: "/connection-type", icon: <SettingsIcon /> },
        { title: "Tariff Rate", path: "/tariff-rate", icon: <EqualizerIcon /> },
        {
          title: "System",
          icon: <DashboardIcon />,
          submenus: [
            { title: "Dash Board", path: "/system/dashboard", icon: <HomeIcon /> },
            { title: "Menu Master", path: "/system/menu-master", icon: <ListAltIcon /> },
            { title: "Policy Master", path: "/system/policy-master", icon: <ReceiptIcon /> },
          ],
        },
        { title: "Receipt Deletion", path: "/receipt-deletion", icon: <ReceiptIcon /> },
        { title: "Collection Center", path: "/collection-center", icon: <HomeIcon /> },
        { title: "Arrear Entry", path: "/arrear-entry", icon: <ListAltIcon /> },
        { title: "Bluk Meter Master", path: "/bulk-meter-master", icon: <BuildIcon /> },
        { title: "Employee Master", path: "/employee-master", icon: <PersonIcon /> },
      ],
    },
    {
      title: "Transaction",
      icon: <MonetizationOnIcon />,
      submenus: [
        { title: "Transaction", path: "/transaction", icon: <AttachMoneyIcon /> },
      ],
    },
    {
      title: "Report",
      icon: <EqualizerIcon />,
      submenus: [
        { title: "Report", path: "/report", icon: <AssessmentIcon /> },
      ],
    },
    {
      title: "MIS Report",
      icon: <DashboardIcon />,
      submenus: [
        { title: "Help Desk (Dash Board)", path: "/mis-report/help-desk", icon: <HomeIcon /> },
      ],
    },
  ];

  const renderSubmenus = (submenus) =>
    submenus.map((submenu, idx) => {
      if (submenu.submenus) {
        // Nested submenus
        return (
          <React.Fragment key={submenu.title}>
            <ListItem
              button
              onClick={() => handleToggle(submenu.title)}
              className={classes.listItem}
            >
              <ListItemIcon>{submenu.icon}</ListItemIcon>
              <ListItemText primary={submenu.title} />
              {openSections[submenu.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSections[submenu.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderSubmenus(submenu.submenus)}
              </List>
            </Collapse>
          </React.Fragment>
        );
      }
      return (
        <NavLink
          key={idx}
          to={submenu.path}
          style={{ textDecoration: "none", color: "inherit" }}
          activeClassName={classes.activeLink}
        >
          <ListItem button className={`${classes.nested} ${classes.listItem}`}>
            <ListItemIcon>{submenu.icon}</ListItemIcon>
            <ListItemText primary={submenu.title} />
          </ListItem>
        </NavLink>
      );
    });

  return (
    <div className={classes.sidebar}>
    <List>
      {menuStructure.map((section, idx) => (
        <React.Fragment key={section.title}>
          <ListItem
            button
            onClick={() => handleToggle(section.title)}
            className={classes.listItem}
          >
            <ListItemIcon>{section.icon}</ListItemIcon>
            <ListItemText primary={section.title} />
            {openSections[section.title] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSections[section.title]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderSubmenus(section.submenus)}
            </List>
          </Collapse>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgb(144, 161, 177)",
              marginLeft: '8px'
            }}
          />
        </React.Fragment>
      ))}
    </List>
    </div>
  );
};

export default SideBarLinks;
