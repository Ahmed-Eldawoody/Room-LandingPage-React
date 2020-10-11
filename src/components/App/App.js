import React, { useState } from "react";
//
//
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
// Icons & images
import slide1 from "../../images/desktop-image-hero-1.jpg";
import slide2 from "../../images/desktop-image-hero-2.jpg";
import slide3 from "../../images/desktop-image-hero-3.jpg";
import imageAboutDark from "../../images/image-about-dark.jpg";
import imageAboutLight from "../../images/image-about-light.jpg";
import arrow from "../../images/icon-arrow.svg";
//
//
// Components
import Header from "../Header/Header";
import ButtonsMobile from "../Buttons/ButtonsMobile";
import ButtonsDesktop from "../Buttons/ButtonsDesktop";
//
//
//
//
//
const useStyles = makeStyles((theme) => ({
  slider: {
    // backgroundImage: `url(${slides[0]})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    height: 534,
  },
  h4title: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  subtitle1: {
    [theme.breakpoints.down("md")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
    },
  },
  shopNowButton: {
    textAlign: "left",
    letterSpacing: 10,
    color: "hsl(0, 0%, 63%)",
    [theme.breakpoints.down("md")]: {
      fontSize: ".75rem",
    },
  },
  h5title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  body2: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
    },
  },
}));
//
//
// App Component
function App() {
  //
  //
  const slides = [slide1, slide2, slide3];
  // Slider initial value
  const [slidIndex, setSlidIndex] = useState(0);
  function nextSlide() {
    if (slidIndex === 2) {
      setSlidIndex(0);
    } else {
      setSlidIndex(slidIndex + 1);
    }
  }
  function prevSlide() {
    if (slidIndex === 0) {
      setSlidIndex(2);
    } else {
      setSlidIndex(slidIndex - 1);
    }
  }
  //
  //
  const classes = useStyles();
  //
  //
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  //
  // JSX
  return (
    <Grid container direction="column">
      {/* -----First row----- */}
      <Grid item container direction="row">
        {/* ---Image Slider & app bar--- */}
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          xs={12}
          md={7}
          className={classes.slider}
          style={{
            backgroundImage: `url(${slides[slidIndex]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 534,
          }}
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <ButtonsMobile nextSlide={nextSlide} prevSlide={prevSlide} />
          </Grid>
        </Grid>
        {/* ---Text in right--- */}
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          style={{ height: matches ? null : 534 }}
          xs={12}
          md={5}
        >
          <Grid item style={{ padding: "3em" }}>
            <Typography variant="h4" paragraph className={classes.h4title}>
              Discover innovative ways to decorate
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.subtitle1}
            >
              We provide unmatched quality.comfort.and style from property
              owners across the country. Our experts combine from and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </Typography>
            <Button
              endIcon={<img src={arrow} alt="arrow" />}
              className={classes.shopNowButton}
              variant="text"
            >
              shop now
            </Button>
          </Grid>
          <Grid item>
            <ButtonsDesktop nextSlide={nextSlide} prevSlide={prevSlide} />
          </Grid>
        </Grid>
      </Grid>
      {/* -----Second row----- */}
      <Grid item container>
        <Grid item xs={12} md={3}>
          <img
            src={imageAboutDark}
            alt="imageAboutDark"
            style={{ verticalAlign: "bottom", width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            paddingTop: "3em",
            paddingLeft: "3em",
            paddingRight: "3em",
          }}
        >
          <Typography variant="h5" paragraph className={classes.h5title}>
            ABOUT OUR FURNITURE
          </Typography>
          <Typography
            variant="body2"
            paragraph
            style={{ maxHeight: 266 }}
            className={classes.body2}
          >
            Our multifunctional collection blends design and function to suit
            your individual taste.Make each room uniqe,or pick a cohesive theme
            that best express your interests and what inspires you. Find the
            furniture pieces you need,from traditional to contemporary styles or
            anything in between. Product specialists are availiable to help you
            creat your dream room.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src={imageAboutLight}
            alt="imageAboutLight"
            style={{ verticalAlign: "bottom", width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
