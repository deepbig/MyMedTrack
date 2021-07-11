import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
// import Apps from "@material-ui/icons/Apps";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
// import ViewDay from "@material-ui/icons/ViewDay";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AssessmentIcon from '@material-ui/icons/Assessment';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/my-med-track/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={10} sm={10}>
            <h3 className={classes.title}>Project Description</h3>
            <h4 className={classes.description}>
              As we humans age, inevitably the amount of medication we take increases,
              and it becomes increasingly more difficult to keep track of all the details.
              Important things to remember about our medication are schedule, dosage,
              and purpose, amongst others. MyMedTrack aims to provide a simple,
              user-friendly area for people to enter these important details about their medication
              as well as offer key features like trackers, reminders and medication list generation.
              Our tagline “Setup and forget. We’ll remind you” embodies everything we are trying to
              accomplish with this product. MyMedTrack will offer peace of mind to our users to ensure
              a dose is never missed and a medication is never forgotten when visiting their doctor!
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
          <GridItem md={12} sm={12}>
            <h3 className={classes.title}>The Comprehensive List of Features</h3>
           
          </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Medication Detail Entry"
                description="User can enter medication detail such as name, dosage, and purpose."
                icon={ImportContactsIcon}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Medication Consumption Tracker"
                description="Think you forgot to take a dose yesterday, don’t worry we’ll keep track of that for you! You can schedule custom reminders."
                icon={NotificationsActiveIcon}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Medication Detail Report"
                description="We generate all your medication consumption for your doctor visits."
                icon={AssessmentIcon}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
