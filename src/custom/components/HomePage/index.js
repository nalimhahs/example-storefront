import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProductGrid from "components/ProductGrid";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";

const styles = (theme) => ({
  homepage: {
    // position: "relative"
  },
  hero: {
    width: "100%",
    height: "85vh",
    // marginTop: -theme.spacing.unit * 3,
    // position: "absolute",
    // top: "calc(64px + 2rem)",
    // left: 0,
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr",
    "grid-template-rows": "1fr 1fr",
  },

  grid_image: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    // position: "relative",
    transition: "0.2s",
    "&:hover": {
      filter: "brightness(75%)",
      // backgroundSize: "140%",
    },
  },
  grid_1: {
    "grid-area": "1/1/3/3",
    position: "relative",
  },
  grid_2: {
    height: "100%",
    width: "100%",
    "grid-area": "1/3/2/4",
    position: "relative",
  },
  grid_3: {
    height: "100%",
    width: "100%",
    "grid-area": "2/3/3/4",
    position: "relative",
  },

  hero_caption: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    // "&:hover": {
    //   filter: "brightness(75%)",
    //   backgroundSize: "140%",
    // },
  },
  hero_caption_main: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "5rem",
    top: "60vh",
    // top: "0vh",
    // height: "100%",
    // width: "100%",
  },
  animated_heading: {
    transition: "all 0.1s ease-in-out",
    position: "relative",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      width: 0,
      height: 5,
      margin: "2px 0 0",
      transition: "all 0.1s ease-in-out",
      transitionDuration: "0.75s",
      opacity: 0,
      backgroundColor: "white",
      left: 0,
    },
  },
  link: {
    textDecoration: "none",
  },

  darken: {
    filter: "brightness(50%) !important",
  },

  "@media (max-width: 700px)": {
    hero: {
      height: "130vh",
      "grid-template-columns": "1fr",
      "grid-template-rows": "1fr 1fr 1fr 1fr",
    },
    grid_1: {
      "grid-area": "1/1/3/2",
    },
    grid_2: {
      "grid-area": "3/1/4/2",
    },
    grid_3: {
      "grid-area": "4/1/5/2",
    },
    hero_caption_main: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: "1.5rem",
      top: "45vh",
    },
  },
});

const HomePage = (props) => {
  const classes = props.classes;
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <Typography variant="caption">
      <div className={classes.homepage}>
        <div className={classes.hero}>
          <div className={classes.grid_1}>
            <div
              className={classes.grid_image}
              style={{
                backgroundImage: 'url("//cdn.shopify.com/s/files/1/0271/2692/3338/files/hero10_860x.jpg?v=1573473780")',
              }}
            ></div>
            <div className={classes.hero_caption_main}>
              <a className={classes.link} href={""}>
                <Typography
                  variant="h4"
                  style={{ color: "white", borderBottom: "2px solid white", marginBottom: "0.6rem" }}
                  className={classes.animated_heading}
                >
                  BLCKD Collection
                </Typography>
                <Typography style={{ color: "white", marginLeft: "0.15rem", letterSpacing: "0.05rem" }}>
                  Shop Now ⟶
                </Typography>
              </a>
            </div>
          </div>
          <div className={classes.grid_2}>
            <div
              className={hover1 ? classes.grid_image + " " + classes.darken : classes.grid_image}
              style={{
                backgroundImage: 'url("//cdn.shopify.com/s/files/1/0271/2692/3338/files/hero8_2100x.jpg?v=1573472593")',
              }}
            ></div>
            <a className={classes.link} href={""}>
              <div
                className={classes.hero_caption}
                onMouseEnter={() => {
                  setHover1(true);
                }}
                onMouseLeave={() => {
                  setHover1(false);
                }}
              >
                <Typography variant="h6" style={{ color: "white" }} className={classes.animated_heading}>
                  Kanji Tees
                </Typography>
                <Typography style={{ color: "white", marginLeft: "0.15rem", letterSpacing: "0.05rem" }}>
                  Shop Now ⟶
                </Typography>
              </div>
            </a>
          </div>
          <div className={classes.grid_3}>
            <div
              className={hover2 ? classes.grid_image + " " + classes.darken : classes.grid_image}
              style={{
                backgroundImage: 'url("//i.pinimg.com/564x/9c/ec/52/9cec52c13cac84249ca670e4b01ac589.jpg")',
                filter: "brightness(75%)",
              }}
            ></div>
            <a className={classes.link} href={""}>
              <div
                className={classes.hero_caption}
                onMouseEnter={() => {
                  setHover2(true);
                }}
                onMouseLeave={() => {
                  setHover2(false);
                }}
              >
                <Typography variant="h6" style={{ color: "white" }} className={classes.animated_heading}>
                  Lasagne?
                </Typography>
                <Typography style={{ color: "white", marginLeft: "0.15rem", letterSpacing: "0.05rem" }}>
                  Shop Now ⟶
                </Typography>
              </div>
            </a>
          </div>
        </div>
        <CatalogGrid />
      </div>
    </Typography>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HomePage);
