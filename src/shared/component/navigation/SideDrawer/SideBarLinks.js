import React, { useState } from "react";
import { NavLink, useLocation  } from "react-router-dom";
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
import ReceiptIcon from "@material-ui/icons/Receipt";
import AssessmentIcon from "@material-ui/icons/Assessment";
import GamesIcon from '@material-ui/icons/Games';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Dashboard } from "@material-ui/icons";
import TableChartIcon from '@material-ui/icons/TableChart';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import WorkIcon from '@material-ui/icons/Work';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import RoomIcon from '@material-ui/icons/Room';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PolicyIcon from '@material-ui/icons/Policy';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import SpeedIcon from '@material-ui/icons/Speed';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import NoteIcon from '@material-ui/icons/Note';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import GetAppIcon from '@material-ui/icons/GetApp';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import PageviewIcon from '@material-ui/icons/Pageview';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LaunchIcon from '@material-ui/icons/Launch';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      borderRadius:"3px",
    },
  },
  activeLink: {
    backgroundColor: theme.palette.action.selected,
    borderRadius:"3px",
    color: theme.palette.secondary.main,
    "& .MuiListItemIcon-root": {
      color: theme.palette.secondary.main,
    },
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
      borderRadius: "5px", // Chrome/Safari/Edge: Rounded scrollbar
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent", // Chrome/Safari/Edge: Transparent scrollbar track
    },
  },
}));

const SideBarLinks = () => {
  const classes = useStyles();
  const location = useLocation(); // To determine the current path

  // Initialize all sections as open
  const [openSections, setOpenSections] = useState({
    // Dashboard:true,
    // Master: true,
    // Transaction: true,
    // Report: true,
    // "MIS Report": true,
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
      path: "/", // Dashboard as a standalone page
      icon: <HomeIcon />,
      submenus: null, // No submenus for Dashboard
    },
    {
      title: "Master",
      icon: <GamesIcon />,
      submenus: [
        { title: "New Consumer Entry", path: "/new-consumer-entry", icon: <PersonAddIcon /> },
        { title: "Consumer Detail", path: "/consumer-detail", icon: <ListAltIcon /> },
        { title: "Designation", path: "/designation", icon: <WorkIcon /> },
        { title: "User Level Setting", path: "/user-level-setting", icon: <BuildIcon /> },
        { title: "Tariff Size", path: "/tariff-size", icon: <AspectRatioIcon /> },
        { title: "Zone", path: "/zone", icon: <RoomIcon /> },
        { title: "Bill", path: "/bill", icon: <ReceiptIcon /> },
        { title: "Construction Type", path: "/construction-type", icon: <ApartmentIcon /> },
        { title: "Connection (Tariff) Type", path: "/connection-type", icon: <LocalConvenienceStoreIcon /> },
        { title: "Tariff Rate", path: "/tariff-rate", icon: <LocalOfferIcon /> },
        {
          title: "System",
          icon: <SettingsIcon />,
          submenus: [
            { title: "Dashboard", path: "/system/dashboard", icon: <Dashboard /> },
            { title: "Menu Master", path: "/system/menu-master", icon: <MenuBookIcon /> },
            { title: "Policy Master", path: "/system/policy-master", icon: <PolicyIcon /> },
          ],
        },
        { title: "Receipt Deletion", path: "/receipt-deletion", icon: <DeleteForeverIcon /> },
        { title: "Collection Center", path: "/collection-center", icon: <CollectionsBookmarkIcon /> },
        { title: "Arrear Entry", path: "/arrear-entry", icon: <AmpStoriesIcon /> },
        { title: "Bulk Meter Master", path: "/bulk-meter-master", icon: <SpeedIcon /> },
        { title: "Employee Master", path: "/employee-master", icon: <PeopleIcon /> },
      ],
    },
    {
      title: "Transaction",
      icon: <AccountBalanceIcon />,
      submenus: [
        {
          title: "Billing",
          icon: <AccountBalanceWalletIcon />,
          submenus: [
            { title: "Generate Bill", path: "/transaction/billing/generate-bill", icon: <AddBoxIcon /> },
            { title: "Edit Bill", path: "/transaction/billing/edit-bill", icon: <BorderColorIcon /> },
          ],
        },
        {
          title: "Receipts",
          icon: <NoteIcon />,
          submenus: [
            { title: "Add Receipt Data Entry", path: "/transaction/receipts/add-reciept-data-entry", icon: <CreateNewFolderIcon /> },
            { title: "Import Receipt Data", path: "/transaction/receipts/import-receipt-data", icon: <GetAppIcon /> },
            { title: "Dishonour Cheque", path: "/transaction/receipts/dishonour-cheque", icon: <SmsFailedIcon /> },
            { title: "View Receipt Data Entry", path: "/transaction/receipts/view-receipt-data-entry", icon: <PageviewIcon /> },
          ],
        },
        { title: "Credit/Debit Entry", path: "/transaction/credit-debit", icon: <CreditCardIcon /> },
      ],
    },
    {
      title: "Report",
      icon: <AssessmentIcon />,
      submenus: [
        {
          title: "Billing Report",
          icon: <BubbleChartIcon />,
          submenus: [
            { title: "Bill Register", path: "/report/billing/register", icon: <ExitToAppIcon /> },
            { title: "Bill Print", path: "/report/billing/print", icon: <PrintIcon /> },
          ],
        },
        {
          title: "Receipt Report",
          icon: <DonutLargeIcon />,
          submenus: [
            { title: "Receipt Deletion", path: "/report/receipt/deletion", icon: <DeleteOutlineIcon /> },
            { title: "Receipt Register", path: "/report/receipt/register", icon: <LaunchIcon /> },
          ],
        },
        { title: "Arrear Discount", path: "/report/arrear-discount", icon: <OfflineBoltIcon /> },
      ],
    },
    {
      title: "MIS Report",
      icon: <TableChartIcon />,
      submenus: [
        { title: "Help Desk (Dashboard)", path: "/mis-report/help-desk", icon: <HelpIcon /> },
      ],
    },
  ];

  const renderSubmenus = (submenus, level = 1) =>
    submenus.map((submenu, idx) => {
      const isActive = location.pathname === submenu.path;
      if (submenu.submenus) {
        // Render nested submenus
        return (
          <React.Fragment key={submenu.title}>
            <ListItem
              button
              onClick={() => handleToggle(submenu.title)}
              className={`${classes.listItem} ${isActive ? classes.activeLink : ""}`}
              style={{ paddingLeft: level * 20 }}
            >
              <ListItemIcon>{submenu.icon}</ListItemIcon>
              <ListItemText primary={submenu.title} />
              {openSections[submenu.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSections[submenu.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderSubmenus(submenu.submenus, level + 1)}
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
          className={isActive ? classes.activeLink : ""}
        >
          <ListItem button className={`${classes.listItem} ${isActive ? classes.activeLink : ""}`} style={{ paddingLeft: level * 20 }}>
            <ListItemIcon>{submenu.icon}</ListItemIcon>
            <ListItemText primary={submenu.title} />
          </ListItem>
        </NavLink>
      );
    });

  return (
    <div className={classes.sidebar}>
      <List>
        {menuStructure.map((section) => {
          const isActive = location.pathname === section.path;
          return (
          <React.Fragment key={section.title}>
            {section.submenus ? (
              <React.Fragment>
                <ListItem
                  button
                  onClick={() => handleToggle(section.title)}
                  className={`${classes.listItem} ${isActive ? classes.activeLink : ""}`}
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
              </React.Fragment>
            ) : (
              <NavLink
                to={section.path}
                style={{ textDecoration: "none", color: "inherit" }}
                className={isActive ? classes.activeLink : ""}
              >
                <ListItem button className={`${classes.listItem} ${isActive ? classes.activeLink : ""}`}>
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText primary={section.title} />
                </ListItem>
              </NavLink>
            )}
          </React.Fragment>
        );
        })}
      </List>
    </div>
  );
};

export default SideBarLinks;
