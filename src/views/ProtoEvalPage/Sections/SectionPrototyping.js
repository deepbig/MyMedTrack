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

import paperProto1 from "assets/img/paper-prototype1.png";
import paperProto2 from "assets/img/paper-prototype2.png";
import computerProto1 from "assets/img/computer-prototype.png";


const styles = {
  ...resketchingStyle,
  ...imagesStyles,
};

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SectionPrototyping() {
  const classes = useStyles();

  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openThird, setOpenThird] = React.useState(false);

  return (
    <div className={classNames(classes.section)}>
      <div className={classes.container}>
        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <h2 className={classes.title}>Paper Prototype - Storyboard</h2>
        </GridItem>
        <GridContainer>
          <GridItem xs={12}>
            <Button onClick={() => setOpenFirst(true)}>
              <img
                src={paperProto1}
                alt="Paper Prototype 1"
                className={classes.imgCard}
              />
            </Button>

            <Dialog fullScreen open={openFirst} onClose={() => setOpenFirst(false)} TransitionComponent={Transition}>
              <DialogHeader
                title="Paper Prototype - Storyboard 1"
                fixed
                color="info"
                setOpen={setOpenFirst}
              />
              <Card style={{ paddingTop: "50px" }} className={classes.imgCardExtended}>
                <img
                  src={paperProto1}
                  alt="Paper Prototype - Storyboard 1"
                  className={classes.imgCard}
                />
              </Card>
            </Dialog>

          </GridItem>


          <GridItem xs={12}>
            <Button onClick={() => setOpenSecond(true)}>
              <img
                src={paperProto1}
                alt="Paper Prototype 2"
                className={classes.imgCard}
              />
            </Button>

            <Dialog fullScreen open={openSecond} onClose={() => setOpenSecond(false)} TransitionComponent={Transition}>
              <DialogHeader
                title="Paper Prototype - Storyboard 2"
                fixed
                color="info"
                setOpen={setOpenSecond}
              />
              <Card style={{ paddingTop: "50px" }} className={classes.imgCardExtended}>
                <img
                  src={paperProto1}
                  alt="Paper Prototype - Storyboard 2"
                  className={classes.imgCard}
                />
              </Card>
            </Dialog>

          </GridItem>

        </GridContainer>


        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <h2 className={classes.title}>Evaluations on Prototype</h2>
          <h5 className={classes.description}>
            We designed our first paper prototypes based on sketches we created in deliverable #3. We considered elderly
            people as our target users and planned to design the paper prototype accordingly. For example, larger texts
            and easy wordings are applied to the paper prototype. After the paper prototype is completed, we prepared
            the following tasks to conduct usability testing:
          </h5>

          <h5 className={classes.description}>
            <ul>
              <li>
                <p>Create a new medication</p>
              </li>
              <li>
                <p>Schedule a medication alert and disable an alert</p>
              </li>
              <li>
                <p>Check today’s consumption history</p>
              </li>
              <li>
                <p>Check the medication report and find active medications from the list</p>
              </li>
              <li>
                <p>Log out the application</p>
              </li>
              <li>
                <p>Do you/your patients currently have access to a list of all the medication that is being administered?</p>
              </li>
            </ul>
          </h5>

          <h5 className={classes.description}>
            We selected three testers for this usability testing and the testers provided us with valuable feedback.
            The first tester is a 64-year-old woman who currently takes 5 different medications, several times a day.
            The second tester is a 65-year-old man who currently takes 2 different medications 3 times a day. The last tester
            is a 48-year-old man who lives with his 76-year-old mother who takes 6 different medications with various consumption
            schedules.
          </h5>

          <h5 className={classes.description}>
            All testers successfully found the main menus such as Add New Medication, Consumption History, and List of Medications.
            However, the menu list button on the left corner of the app bar was not being used by the testers until they proceeded
            to the “Log out of the application” task. One tester mentioned that the menu button was not visible and the text of
            the menu list was too small. Also, two testers asked a question about the units of the refill frequency section when
            they continued the “Create a new medication” task. Scheduling a medication alert task was the most difficult process
            for the testers because setting the alert button was located in the Medication Report menu. The testers successfully
            completed checking today’s consumption history task, but one tester wanted to see the time of the scheduled consumptions
            and change the date of the history. Also, another tester wanted to add some comments on the consumption history,
            because the user sometimes intentionally misses the scheduled consumption for diverse reasons. All testers successfully
            completed the tasks for checking the medication report and finding active medications from the list without any
            difficulties. However, one tester wanted to see the detailed information using the medication detail view, not the
            table view. Lastly, one tester faced difficulties logging out from the application because the button was in the menu
            list. The tester was not aware of the menu button on the app bar.
          </h5>

          <h5 className={classes.description}>
            By analyzing the usability testing results, we discovered some features to improve our prototype design and applied them
            to the computer prototype. First, we removed the menu list button in the left corner of the app bar and replaced the menu
            list button with our logo. We added a feature that clicking the logo directs the user to the home page. Also, we moved
            the logout button from the menu list to the right corner of the app bar, because some testers faced difficulties finding
            the logout button. Another finding from the usability testing is that the testers used different units when they typed
            the refill frequency section. Therefore, we decided to provide a selection field, containing days, weeks, and months
            options, for the refill frequency section. In addition, we created the add alert button in the medication details sections
            by considering the testers' workflows to create alerts of a medication. Below the save and delete button of the medication
            details, we added the alert list table to help the user manage the alert feature easily. Lastly, we added a feature in
            the List of Medications section to help the user change the view of the medication detail by clicking a row of the table.
          </h5>

        </GridItem>

        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <h2 className={classes.title}>Computer Prototype</h2>
        </GridItem>
        <GridContainer justify="center">
          <GridItem xs={12}>

            <Button onClick={() => setOpenThird(true)}>
              <img
                src={computerProto1}
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
                  src={computerProto1}
                  alt="Medication List / Report"
                  className={classes.imgCard}
                />
              </Card>

            </Dialog>

          </GridItem>

        </GridContainer>

        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto, classes.title)}>
          <a href="https://my-med-track.web.app/home" style={{ textAlign: "center"}}>You can find the computer prototype in here!</a>
        </GridItem>
      </div>
    </div>
  );
}
