import React, {useState} from "react";
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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarBorder from "@material-ui/icons/StarBorder";
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideBarLinks = () => {
  const classes = useStyles();
  const [roomOpen, setRoomOpen] = React.useState(false);
  const [buildingOpen, setBuildingOpen] = React.useState(false);
  const [openSections, setOpenSections] = useState({});

  const handleToggle = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };


  const menuStructure = [
    {
      title: "Master",
      submenus: [
        { title: "New Consumer Entry", path: "/new-consumer-entry" },
        { title: "Consumer Detail", path: "/consumer-detail" },
        { title: "Designation", path: "/designation" },
        { title: "User Level Setting", path: "/user-level-setting" },
        { title: "Tariff Size", path: "/tariff-size" },
        { title: "Zone", path: "/zone" },
        { title: "Bit", path: "/bit" },
        { title: "Construction Type", path: "/construction-type" },
        { title: "Connection (Tariff) Type", path: "/connection-type" },
        { title: "Tariff Rate", path: "/tariff-rate" },
        {
          title: "System",
          submenus: [
            { title: "Dash Board", path: "/system/dashboard" },
            { title: "Menu Master", path: "/system/menu-master" },
            { title: "Policy Master", path: "/system/policy-master" },
          ],
        },
        { title: "Receipt Deletion", path: "/receipt-deletion" },
        { title: "Collection Center", path: "/collection-center" },
        { title: "Arrear Entry", path: "/arrear-entry" },
        { title: "Bluk Meter Master", path: "/bulk-meter-master" },
        { title: "Employee Master", path: "/employee-master" },
      ],
    },
    {
      title: "Transaction",
      submenus: [], // Add submenus if needed
    },
    {
      title: "Report",
      submenus: [], // Add submenus if needed
    },
    {
      title: "MIS Report",
      submenus: [
        { title: "Help Desk (Dash Board)", path: "/mis-report/help-desk" },
      ],
    },
  ];

  const renderSubmenus = (submenus) =>
    submenus.map((submenu, idx) => {
      if (submenu.submenus) {
        // Handle nested submenus
        return (
          <React.Fragment key={submenu.title}>
            <ListItem button onClick={() => handleToggle(submenu.title)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={submenu.title} />
              {openSections[submenu.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={openSections[submenu.title]}
              timeout="auto"
              unmountOnExit
            >
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
          style={{ textDecoration: "none" }}
          activeClassName="active-link"
        >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={submenu.title} />
          </ListItem>
        </NavLink>
      );
    });



    return (
      <List>
        {menuStructure.map((section, idx) => (
          <React.Fragment key={section.title}>
            <ListItem button onClick={() => handleToggle(section.title)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={section.title} />
              {openSections[section.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSections[section.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderSubmenus(section.submenus)}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>  
  );
};
export default SideBarLinks;
