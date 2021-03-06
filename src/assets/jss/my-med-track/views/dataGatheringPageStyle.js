import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
} from "assets/jss/my-med-track.js";

const dataGatheringPageStyle = {
  container: {
    ...container,
    zIndex: "2",
  },
  textCenter: {
    textAlign: "center",
  },
  parallax: {
    height: "60vh",
    overflow: "hidden",
  },
  title: {
    ...title,
    color: whiteColor,
  },
  subtitle: {
    color: whiteColor,
  },
  main: {
    ...main,
    ...mainRaised,
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
};

export default dataGatheringPageStyle;
