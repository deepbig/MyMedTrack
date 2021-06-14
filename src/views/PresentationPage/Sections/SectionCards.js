import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/my-med-track/views/presentationSections/cardsStyle.js";

import cardsTest from "assets/img/question-mark.png";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={6} sm={12}>
            <div className={classes.imageContainer}>
              <img src={cardsTest} alt="views" />
            </div>
          </GridItem>
          <GridItem md={6} sm={12} className={classes.mlAuto}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Research Questions</h3>
              <h5 className={classes.description}>
              1. What demographic do we need to target to get valuable feedback? <br />
              2. What can we make the product user-friendly for our target users? <br />
              3. What features do our target users need in order to see value in the product? <br />
              4. Why is this approach better than what they are doing today? <br />
              5. Where will users use this product? <br />
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
