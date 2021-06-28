import {
  grayColor,
  container,
  title,
  subtitle,
} from "assets/jss/my-med-track.js";

import imagesStyles from "assets/jss/my-med-track/imagesStyles.js";

const sectionTextStyle = {
  container,
  title,
  subtitle,
  section: {
    paddingBottom: "0",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0",
    "& p": {
      fontSize: "1.188rem",
      lineHeight: "1.5em",
      color: grayColor[15],
      marginBottom: "30px",
    },
  },
  quoteText: {
    fontSize: "1.5rem !important",
  },
  ...imagesStyles,
};

export default sectionTextStyle;
