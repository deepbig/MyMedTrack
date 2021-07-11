import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";

import sketches from "assets/img/assets-resketches/Screenshot1.png";

import sectionNextPage from "assets/jss/my-med-track/sectionNextPageStyle.js";

const useStyles = makeStyles(sectionNextPage);

export default function SectionPreviousPage() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              See More Pages of the Project
            </h2>
            <GridContainer justify="center">

              <GridItem sm={10} md={5}>
                <Card blog>
                  <CardHeader image>
                    <a href="/sketching-ideation">
                      <img src={sketches} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + sketches + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      <a href="/sketching-ideation">
                        Sketching and Ideation
                      </a>
                    </h4>
                    <p className={classes.description}>
                      sketches and re-sketches with justifications.
                      <a href="/sketching-ideation"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>

            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
