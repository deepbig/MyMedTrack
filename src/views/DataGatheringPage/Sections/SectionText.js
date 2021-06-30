import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  Box
} from "@material-ui/core";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Quote from "components/Typography/Quote.js";
// core components

import blog4 from "assets/img/myMedTrack_ERD.png";

import sectionTextStyle from "assets/jss/my-med-track/views/dataGatheringSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>
            User Analysis
          </h2>
          <h3 className={classes.title}>
            Users’ Goal
          </h3>
          <p>
            The goal our target users will achieve by using our product is to solve a specific daily
            problem, which is remembering to take their medication such as shots, drugs, or pills at
            a specific time. Users will be able to track, get reminders for, and generate reports of
            their medication. Other users can use our product to assist an elderly family member to
            track their medication.
          </p>

          <h3 className={classes.title}>
            User Characteristics
          </h3>
          <p>
            Our target demographic for this product will be aging or elderly people with one or more
            medications that they must take on a regular basis. MyMedTrack users will be between the
            ages of 60 to 90 years old. We interviewed four people who dealt with medication
            consumption in some form on a daily basis. After analyzing our interviewee’s answers,
            we decided upon three user classes. Each class is characterized in Table 1 below. Not all
            interviewee’s fell into our target demographic, but upon conducting the interviews we
            gained valuable insight into another potential use case for the product. Kendall Jones,
            a 28-year-old nurse, was the motivation for our first class. Users of this class will
            primarily fit into this newly found use case of users that will manage medication for
            others. David Evans was the inspiration for our second class which consists of users who
            will have mixed familiarity with technology. David also fits into this newly found use
            case, but we expect users of this class to be mixed between managing their own medication
            and others. Lastly, John and Pam Canning gave us a lot of insight into our target
            demographic and our final class of users. From their interviews we were able to see that
            users from this class are willing to learn and use the technology due to the upsides we
            aim to provide.
          </p>

          <Box align="center">
            <h4 className={classes.subtitle}>
              MyMedTrack User Characteristics, by group
            </h4>
          </Box>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    key={1}
                  // align='center'
                  >
                    Characteristic
                  </TableCell>
                  <TableCell
                    key={2}
                  // align='center'
                  >
                    Class 1
                  </TableCell>
                  <TableCell
                    key={3}
                  // align='center'
                  >
                    Class 2
                  </TableCell>
                  <TableCell
                    key={4}
                  // align='center'
                  >
                    Class 3
                  </TableCell>
                </TableRow>


              </TableHead>

              <TableBody>
                <TableRow hover>
                  <TableCell key={'1'} >Age</TableCell>
                  <TableCell key={'2'} >18 to 39 years old</TableCell>
                  <TableCell key={'3'} >40 to 59 years old</TableCell>
                  <TableCell key={'4'} >60 to 90 years old</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell key={'1'} >Sex</TableCell>
                  <TableCell key={'2'} >M/F</TableCell>
                  <TableCell key={'3'} >M/F</TableCell>
                  <TableCell key={'4'} >M/F</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell key={'1'} >Physical Limitations</TableCell>
                  <TableCell key={'2'} >Few physical limitations expected from users of this class.</TableCell>
                  <TableCell key={'3'} >Some expected physical limitations like hearing and sight
                    will be found in this age group. Limitations that may limit which devices can be used may
                    also exist within this group.</TableCell>
                  <TableCell key={'4'} >A greater frequency of vision or hearing impairment may
                    exist in this group. Limitations that limit which devices can be used may also exist more
                    frequently.</TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell key={'1'} >Educational Background</TableCell>
                  <TableCell key={'2'} >Education could vary from no high school up to graduate level.
                  Partial college is expected to be most common.</TableCell>
                  <TableCell key={'3'} >Education could vary from no high school up to graduate level. 
                  No college or college degree is most expected.</TableCell>
                  <TableCell key={'4'} >Education could vary from no high school up to graduate level. 
                  No college or college degree is most expected.</TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell key={'1'} >Technical Ability</TableCell>
                  <TableCell key={'2'} >Users from this class will be most familiar with technology. 
                  They will have grown up with technology or will have been introduced to it early on in life.</TableCell>
                  <TableCell key={'3'} >Technical ability from this class will be mixed. Some users 
                  will have grasped technology while others will have avoided it. </TableCell>
                  <TableCell key={'4'} >Technical ability from this class will be mixed. Some users will have grasped technology 
                  while others will have avoided it. Users from this class may require more assistance with technology.</TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell key={'1'} >Motivation</TableCell>
                  <TableCell key={'2'} >Users from this class may be less motivated to use the application for themselves as their 
                  list of medications might be smaller. Users in this class might show more motivation when using the application 
                  as a means of tracking medication for other people.</TableCell>
                  <TableCell key={'3'} >Users of this application may be highly motivated to use the application. Users are familiar 
                  enough with technology that the benefits of using the application will outweigh any potential frustrations of learning to use it.</TableCell>
                  <TableCell key={'4'} >Users of this class might have mixed motivations for using the application. Some users will have adapted 
                  easily to technology and will see this as an enhancement. Others in this class may be reluctant to pivot from the way they normally handle their medications.</TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell key={'1'} >Attitude</TableCell>
                  <TableCell key={'2'} >Attitudes are expected to be positive as the use of the application 
                  should come easily to most users of this class.</TableCell>
                  <TableCell key={'3'} >Attitudes could be positive to frustrated as users of this class will 
                  either grasp the technology easily or have trouble learning to use it.</TableCell>
                  <TableCell key={'4'} >Attitudes of this class are expected to be positive to uninterested. 
                  Users will either be excited to improve this function of their life or will be unwilling 
                  to adopt this new capability.</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </GridItem>

        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Task Analysis</h2>

          <h3 className={classes.title}>
            Task 1: Medication profile
          </h3>

          <h4 className={classes.subtitle}>
            Goal
          </h4>
          <ul>
            <li>
              <p>Provide information about the medication that is entered into the application.</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Preconditions
          </h4>
          <ul>
            <li>
              <p>User account must be created to store medication information.</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Subtasks
          </h4>
          <ul>
            <li>
              <p>Add user’s name.</p>
            </li>
            <li>
              <p>Add, edit, and delete medication name.</p>
            </li>
            <li>
              <p>Add, edit, and delete the medication dosage.</p>
            </li>
            <li>
              <p>Add special instructions.</p>
            </li>
            <li>
              <p>Add, edit, and delete medication renewal information.</p>
            </li>
            <li>
              <p>Sync several profiles together.</p>
            </li>
          </ul>




          <h3 className={classes.title}>
            Task 2: Adding medication schedule
          </h3>

          <h4 className={classes.subtitle}>
            Goal
          </h4>
          <ul>
            <li>
              <p>Provide the necessary schedule information for each medication so that information can be used to set the reminders.</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Preconditions
          </h4>
          <ul>
            <li>
              <p>Medication needs an existing profile with all the medication information saved.</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Subtasks
          </h4>
          <ul>
            <li>
              <p>Set time (hour & minutes)</p>
            </li>
            <li>
              <p>Set days of week.</p>
            </li>
            <li>
              <p>Turn on/off medication schedule.</p>
            </li>
            <li>
              <p>Enable other profiles to receive each other schedule reminders.</p>
            </li>
          </ul>




          <h3 className={classes.title}>
            Task 3: Export medication information report from the application
          </h3>

          <h4 className={classes.subtitle}>
            Goal
          </h4>
          <ul>
            <li>
              <p>Export all information about the user and the medication 
                that is entered in the system in order to share that information when necessary.</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Preconditions
          </h4>
          <ul>
            <li>
              <p>Pre-existing user account with access</p>
            </li>
            <li>
              <p>Medication needs an existing profile with all the medication information saved.</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Subtasks
          </h4>
          <ul>
            <li>
              <p>Preview selected medication report.</p>
            </li>
            <li>
              <p>Export medication report in PDF form to be printed.</p>
            </li>
          </ul>



        </GridItem>


        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>

        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Domain Analysis</h2>
          <p>
            The MyMedTrack application will consist of five main entities and their relationships.
            The first entity is the Profile which stores basic information about the user account
            and has a one to many relationship with the User entity. The User entity stores the name
            of the user it is representing and has a one to many relationship with the Medication
            entity. The Medication entity represents an entry for a medication that the user will take.
            This entity will store information like the name, dosage, special instructions, and
            prescription renewal frequency. Medication has a one to many relationship with the
            MedicationSchedule entity. The MedicationSchedule entity will store the time that the user
            will take each medication. Multiples of this entity exist in the case that a user takes
            a medicine more than once in a given day. The bottom diagram of the above figure shows
            the object relationships. A Profile contains a list of Users. Users will enter medication
            details which will then be used to remind the user to take their medication. Lastly, a user
            can generate a report that contains a list of their medication details.
          </p>

          <br />
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
