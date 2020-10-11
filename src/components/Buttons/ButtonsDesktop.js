import React from "react";
//
//
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import prevArrow from "../../images/icon-angle-left.svg";
import nextArrow from "../../images/icon-angle-right.svg";
//
//
const useStyles = makeStyles((theme) => ({
  arrowButton: {
    backgroundColor: "black",
    borderRadius: 0,
    color: "white",
    boxShadow: "none",
    display: "none",
    "&:hover": {
      backgroundColor: "hsl(0, 0%, 27%)",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
}));
//
//
function ButtonsDesktop(props) {
  //
  //
  const classes = useStyles();
  //
  //
  return (
    <Grid container justify="flex-start">
      <Grid item>
        <Button
          variant="contained"
          className={classes.arrowButton}
          size="large"
          onClick={props.prevSlide}
        >
          <img src={prevArrow} alt="icon-angle-left" />
        </Button>
        <Button
          variant="contained"
          className={classes.arrowButton}
          size="large"
          onClick={props.nextSlide}
        >
          <img src={nextArrow} alt="icon-angle-right" />
        </Button>
      </Grid>
    </Grid>
  );
}

export default ButtonsDesktop;
