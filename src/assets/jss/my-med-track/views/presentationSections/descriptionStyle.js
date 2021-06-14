import {
  container,
  section,
  grayColor,
  title,
} from "assets/jss/my-med-track.js";

const descriptionStyle = {
  container,
  description: {
    color: grayColor[0],
    textAlign: "center",
  },
  section: {
    ...section,
    padding: "70px 0px",
    "& h4$description": {
      fontSize: "1.5em",
    },
  },
  features: {
    textAlign: "center !important",
    paddingTop: "30px",
    paddingBottom: "0px",
    "& p": {
      fontSize: "16px",
      lineHeight: "1.6em",
    },
  },
  title: {
    ...title,
    marginBottom: "5px",
    // marginTop: "60px",
    "& + $description": {
      marginTop: "5px",
      marginBottom: "30px",
    },
  },
};

export default descriptionStyle;
