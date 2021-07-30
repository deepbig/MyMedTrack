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

import preesntation_img from "assets/img/presentation-img.png";

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
              This is last section of the project. Thank you for watching this!
            </h2>
          </GridItem>


        </GridContainer>
      </div>
    </div>
  );
}
