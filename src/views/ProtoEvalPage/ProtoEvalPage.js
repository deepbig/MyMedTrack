/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionPrototyping from "./Sections/SectionPrototyping.js";
import SectionNextPage from "views/ProtoEvalPage/Sections/SectionNextPage";
import dataGatheringPageStyle from "assets/jss/my-med-track/views/dataGatheringPageStyle";


const useStyles = makeStyles(dataGatheringPageStyle);

export default function ProtoEvalPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="MyMedTrack"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/blue.jpg").default}
        className={classes.parallax}
        small
      >
        <div className={classes.container}>
        <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
              Prototyping and Evaluation
              </h1>
              <h4 className={classes.subtitle}>
              Paper prototyping, computer prototyping and usability testing evaluation.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionPrototyping />
        </div>
      </div>
      <SectionNextPage />
      <Footer
        theme="white"
        content={
          <div>
          </div>
        }
      />
    </div>
  )
}