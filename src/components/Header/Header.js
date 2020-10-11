import React, { useState } from "react";
//
//
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import logo from "../../images/logo.svg";
import menuIcon from "../../images/icon-hamburger.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
//
//
// Make Styles
const useStyles = makeStyles((theme) => ({
  appbar: {
    // maxWidth: "600px",
    padding: "1em",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  logo: {
    margin: "0em 4em 0em 1.5em",
    width: 70,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "3em",
    },
  },
  headerLinks: {
    color: "white",
    textTransform: "none",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
      borderRadius: 0,
      borderBottom: "1px solid white",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIcon: {
    color: "white",
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
  },
  drawer: {
    height: "15%",
  },
}));
//
//
//
function Header() {
  //
  //
  // drawer initial stat
  const [open, setOpen] = useState(false);
  function handleDrawer() {
    setOpen(!open);
  }
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //
  //
  // Access Styles
  const classes = useStyles();
  //
  //
  // pages
  const pages = ["home", "shop", "about", "contact"];
  //
  //
  //
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <IconButton onClick={handleDrawer}>
          <MenuIcon fontSize="large" className={classes.menuIcon} />
        </IconButton>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes.headerLinksContainer}>
          {pages.map((page) => {
            return (
              <Button key={page} className={classes.headerLinks}>
                {page}
              </Button>
            );
          })}
        </div>
        <SwipeableDrawer
          open={open}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="top"
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          classes={{ paper: classes.drawer }} // to over write the paper styling
        >
          <Grid
            container
            justify="space-around"
            alignItems="center"
            style={{ marginTop: "1em" }}
          >
            <Grid item>
              <IconButton onClick={handleDrawer}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography style={{ fontWeight: 700 }}>home</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontWeight: 700 }}>shop</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontWeight: 700 }}>about</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontWeight: 700 }}>contact</Typography>
            </Grid>
          </Grid>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
