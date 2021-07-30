import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material ui components
import {
  makeStyles,
  List,
  ListItem
} from "@material-ui/core";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
// sections for this page
import SectionResketching from "views/SketchingIdeationPage/Sections/SectionResketching";
import SectionSections from "views/SketchingIdeationPage/Sections/SectionSections";
import SectionNextPage from "views/SketchingIdeationPage/Sections/SectionNextPage";
import dataGatheringPageStyle from "assets/jss/my-med-track/views/dataGatheringPageStyle";

const useStyles = makeStyles(dataGatheringPageStyle);

export default function SketchingIdeationPage() {
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
                Sketching and Ideation
              </h1>
              <h4 className={classes.subtitle}>
                sketches and re-sketches with justifications.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionResketching />
        <SectionSections />

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