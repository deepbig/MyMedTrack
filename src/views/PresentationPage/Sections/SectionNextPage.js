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

import myMedTrack_ERD from "assets/img/myMedTrack_ERD.png";

import sectionNextPage from "assets/jss/my-med-track/sectionNextPageStyle.js";

const useStyles = makeStyles(sectionNextPage);

export default function SectionNextPage() {
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
              <GridItem sm={10} md={6}>
                <Card blog>
                  <CardHeader image>
                    <a href="/data-gathering">
                      <img src={myMedTrack_ERD} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + myMedTrack_ERD + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>Next Page</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="/data-gathering">
                        Data Gathering
                      </a>
                    </h4>
                    <p className={classes.description}>
                      User Analysis, Task Analysis, and Domain Analysis of the project.
                      <a href="/data-gathering"> Read More </a>
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
