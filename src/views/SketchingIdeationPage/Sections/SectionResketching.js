import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardMedia from '@material-ui/core/CardMedia';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogHeader from "components/DialogHeader/DialogHeader";

import resketchingStyle from "assets/jss/my-med-track/views/presentationSections/ResketchingStyle.js";
import imagesStyles from "assets/jss/my-med-track/imagesStyles.js";

import medicationDetailEntry from "assets/img/assets-resketches/Screenshot1.png";
import consumptionTrakerAlerts from "assets/img/assets-resketches/Screenshot2.png";
import medicationListReport from "assets/img/assets-resketches/Screenshot3.png";


const styles = {
  ...resketchingStyle,
  ...imagesStyles,
};

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SectionResketching() {
  const classes = useStyles();

  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openThird, setOpenThird] = React.useState(false);

  return (
    <div className={classNames(classes.section)}>
      <div className={classes.container}>
        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <h2 className={classes.title}>Sketch 1 - Medication Details Entry</h2>
          <h5 className={classes.description}>
            This sketch shows the application layout that would be used for the medication details screen that the
            user would access to create the profiles for all of their medication.  Along with creating a profile,
            the user would be able to set reminder alerts so they can make sure each medication is taken at the
            time that has been prescribed to them.  The main advantage to having these two layouts is that the
            fields needed to store the medication information and alerts is provided using a design that is easy to
            follow and  when this information is needed the user would be able to navigate to a single location and
            see all the stored information for the selected medication.  This sketch was more promising because this
            workflow was displayed in a simpler form compared to the others and it still provides the majority of the
            functions and features that have been discussed.
          </h5>
        </GridItem>
        <GridContainer>
          <GridItem xs={12}>
            <Button onClick={() => setOpenFirst(true)}>
              <img
                src={medicationDetailEntry}
                alt="Medication Detail Entry Sketches"
                className={classes.imgCard}
              />
            </Button>

            <Dialog fullScreen open={openFirst} onClose={() => setOpenFirst(false)} TransitionComponent={Transition}>
              <DialogHeader
                title="Sketch 1 - Medication Details Entry"
                fixed
                color="info"
                setOpen={setOpenFirst}
              />
              <Card style={{ paddingTop: "50px" }} className={classes.imgCardExtended}>
                <img
                  src={medicationDetailEntry}
                  alt="Medication Detail Entry Sketches"
                  className={classes.imgCard}
                />
              </Card>

            </Dialog>

          </GridItem>

        </GridContainer>


        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <h2 className={classes.title}>Sketch 2 - Consumption Tracker / Alerts</h2>
          <h5 className={classes.description}>
            This sketch displays the thought behind how the consumption tracker should be designed and function.
            In these screens the user would be able to mark each alert as taken or dismissed and have that
            information along with all their other alerts displayed  based on calendar days. The advantage of this
            sketch is being able to look at the current day schedule as well as the past alerts that the users have
            received.  In the sketch it shows the alert summary as a list and the user would have to use the scroll
            bar to navigate the list which could be a possible weakness to this type of layout but overall this layout
            meets the needs of the users because they will receive an alert message as well as be able to check if they
            have taken their medication based on the responds that was provided for each alert.
          </h5>
        </GridItem>
        <GridContainer>
          <GridItem xs={12}>
            <Button onClick={() => setOpenSecond(true)}>
              <img
                src={consumptionTrakerAlerts}
                alt="Consumption Tracker / Alerts"
                className={classes.imgCard}
              />
            </Button>

            <Dialog fullScreen open={openSecond} onClose={() => setOpenSecond(false)} TransitionComponent={Transition}>
              <DialogHeader
                title="Sketch 2 - Consumption Tracker / Alerts"
                fixed
                color="info"
                setOpen={setOpenSecond}
              />
              <Card style={{ paddingTop: "50px" }} className={classes.imgCardExtended}>
                <img
                  src={consumptionTrakerAlerts}
                  alt="Consumption Tracker / Alerts"
                  className={classes.imgCard}
                />
              </Card>

            </Dialog>
          </GridItem>

        </GridContainer>


        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <h2 className={classes.title}>Sketch 3 - Medication List / Report</h2>
          <h5 className={classes.description}>
            The idea behind this sketch was that we wanted a way to provide the user with the ability to see a list
            of the medications with selected information and print that list when this information needs to be shared
            with their health provider.  Being able to print this information and share it amongst the user’s doctors
            would be a great advantage and it would be a lot easier than having to physically carry all of their
            medication with them when they have an appointment.  This screen, based on this sketch, would list all the
            medications the user has created a profile for so the weakness here could be the size of this list based on
            how much information has been stored.  Also until more functions are added to this screen, the user would
            not have a way to select and print certain medications so information not needed at the time will be printed
            anytime the user selects to print the list.   A request for this feature was not stated so this added ability
            could be seen as meeting the unknown needs of the users.  There weren't any other sketches to highlight this
            page and because this was considered one of the main functions needed, this sketch was used.
          </h5>
        </GridItem>
        <GridContainer>
          <GridItem xs={12}>

            <Button onClick={() => setOpenThird(true)}>
              <img
                src={medicationListReport}
                alt="Medication List / Report"
                className={classes.imgCard}
              />
            </Button>

            <Dialog fullScreen open={openThird} onClose={() => setOpenThird(false)} TransitionComponent={Transition}>
              <DialogHeader
                title="Sketch 3 - Medication List / Report"
                fixed
                color="info"
                setOpen={setOpenThird}
              />
              <Card style={{ paddingTop: "50px" }} className={classes.imgCardExtended}>
                <img
                  src={medicationListReport}
                  alt="Medication List / Report"
                  className={classes.imgCard}
                />
              </Card>

            </Dialog>

          </GridItem>

        </GridContainer>

      </div>
    </div>
  );
}
