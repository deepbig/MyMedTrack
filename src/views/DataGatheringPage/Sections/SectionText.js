import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
            User Demography
          </h3>
          <p>
            Our target demographic for this product will be aging or elderly people with
            one or more medications that they must take on a regular basis. MyMedTrack users
            will be between the ages of 60 to 90 years old. However, some of our target users
            will need the help of other users to assist them on tracking their medication.
            Therefore, we will have 4 categories or classes of users.
          </p>

          <h4 className={classes.subtitle}>
            1<sup>st</sup> class: 18 - 35 years old
          </h4>
          <p>
            The technical background required can be basic, and the level of education is
            from High school diploma to higher university degree level.
          </p>

          <h4 className={classes.subtitle}>
            2<sup>nd</sup> class: 36 - 49 years old
          </h4>
          <p>
            All level of education background, and the technical background required can be basic,
            and the level of education could be from High school diploma to higher university degree
            level.
          </p>

          <h4 className={classes.subtitle}>
            3<sup>rd</sup> class: 50 - 64 years old
          </h4>
          <p>
            All level of education background, and the technical background required can be basic,
            and the level of education could be from High school diploma to higher university degree
            level.
          </p>

          <h4 className={classes.subtitle}>
            4<sup>th</sup> class: 65 - 90 years old
          </h4>
          <p>
            years old: Retired individuals who are from all levels, and have different backgrounds
            other than technology knowledge. They still have to have basic knowledge of technology
            skills, or get help from any other user.
          </p>

          <h3 className={classes.title}>
            User's Technical Background
          </h3>
          <p>
            The level of education and computer illiteracy is right above the basic computer knowledge.
          </p>

          <h3 className={classes.title}>
            User's Goal
          </h3>
          <p>
            The goal our target users will achieve by using our product is to solve a specific daily
            problem, which is remembering to take their medication such as shots, drugs, or pills at
            a specific time. Also Users will be able to track the quantity of their medication, will
            get a reminder to take their medication, will get a reminder to refill their medications,
            and will be able to get a report of their medication. Other users can use our product to
            assist an elderly family member to track their medication.
          </p>

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
              <p>Provide information about the medication that are entered into the application</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Subtasks
          </h4>
          <ul>
            <li>
              <p>Add patients name</p>
            </li>
            <li>
              <p>Add, edit and delete medication name</p>
            </li>
            <li>
              <p>Add, edit and delete the medication dosage</p>
            </li>
            <li>
              <p>Add special instructions</p>
            </li>
            <li>
              <p>Add, edit and delete medication renewal information</p>
            </li>
            <li>
              <p>Sync several profiles together</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Preconditions
          </h4>
          <ul>
            <li>
              <p>User account must be created to store medication information</p>
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
              <p>Provide the necessary schedule information for each medication so that
                information can be used to set the reminders</p>
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
              <p>Set days of week</p>
            </li>
            <li>
              <p>Turn on/off medication schedule</p>
            </li>
            <li>
              <p>Enable other profiles to receive each other schedule reminders</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Preconditions
          </h4>
          <ul>
            <li>
              <p>Medication needs an existing profile with all the medication information saved</p>
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
                that is entered in the system in order to share that information when necessary</p>
            </li>
          </ul>

          <h4 className={classes.subtitle}>
            Subtasks
          </h4>
          <ul>
            <li>
              <p>Preview selected medication report</p>
            </li>
            <li>
              <p>Export medication report in PDF form to be printed</p>
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
              <p>Medication needs an existing profile with all the medication information saved</p>
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
