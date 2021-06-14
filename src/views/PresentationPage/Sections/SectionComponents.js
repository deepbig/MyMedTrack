import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "assets/jss/my-med-track/views/presentationSections/componentsStyle.js";

import elderlyImage from "assets/img/elderly_m.jpg";
// import shoppingCartImage from "assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg";
// import shareButtonImage from "assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.jpg";
// import cardImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg";
// import twitterImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg";
// import iconsImage from "assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg";
// import repostImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg";

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>Design Question</h3>
            {/* <h6 className={classes.description}>
              The core elements of your website
            </h6> */}
            <h4 className={classes.description}>
              How do we provide a central, user-friendly area to assist elderly or aging people with managing details about their medication?
            </h4>

            
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={elderlyImage}
                alt="elderly"
                className={classes.componentsBackground}
              />
            </div>
          </GridItem> */}
          <GridItem md={6} lg={6} sm={12} xs={12}>
          <h3 className={classes.title}>Target Users</h3>
            <h4 className={classes.description}>
            Our target demographic for this product will be aging or elderly people with one or more medications that they must take on a regular basis. MyMedTrack users will be between the age of 60 to 90 years old. 
            </h4>
          </GridItem>
          <GridItem>
          <div className={classes.container}>
            <h3 className={classes.title}></h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
