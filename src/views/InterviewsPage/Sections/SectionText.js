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
            User Interviews
          </h2>
          {/* <h3 className={classes.title}>
            Gathering User Data – Interview Questions
          </h3>
          <p>
            <ul>
              <li>
                <p>Could you please introduce yourself including your occupation, age and the approximate number of medications you/your
                  patients take a day (if you are happy to share)?</p>
              </li>
              <li>
                <p>How do you currently keep track of all the different medications you/your patients take, including the dosage and if
                  you/they remembered to take the medications?</p>
              </li>
              <li>
                <p>What different devices are you/your patients familiar with? (e.g iPad, smartphone, laptop)</p>
              </li>
              <li>
                <p>Which different devices do you/your patients have access to?</p>
              </li>
              <li>
                <p>Would you say you/your patients are open to using new technologies such as an application to track medication?</p>
              </li>
              <li>
                <p>Do you/your patients currently have access to a list of all the medication that is being administered?</p>
              </li>
              <li>
                <p>If you/your patients were to begin using an application to track your medications and have access to a medication list,
                  what would be the most important functionality that you think the application should have?</p>
              </li>
              <li>
                <p>Would having an on-the-go medication tracker application be beneficial to your/your patients lifestyle?</p>
              </li>
            </ul>
          </p> */}

          <h3 className={classes.title}>
            Interviewee 1 – Pam Canning
          </h3>
          <p>
            Pam is a 64-year-old retired, married woman who currently takes 4 different medications, several times a day. Overall,
            Pam seemed very alert to what medications she was taking, the dosage and keeping up with if and when the medication had
            been consumed. In her day-to-day life Pam made me aware that she uses both a smartphone, an iPad and occasionally a laptop,
            although she said that she would be very unlikely to keep up with the application if it could only be used on a computer
            as she is not familiar with how to use it and would not want to waste her time learning how to use it. Currently Pam does
            not track her medications in a specific way, it is all done by memory. Pam thought the idea of the application was brilliant
            but was concerned about how easy it would be to gather the data to have the tracker work efficiently. Pam’s main priority
            for the tracker was to be able to view both hers and her husband’s medication list on one device since she often reminds
            her husband about his medications.
          </p>

          <h3 className={classes.title}>
            Interviewee 2 – John Canning
          </h3>
          <p>
            John is a 65-year-old retired, married man who currently only takes 2 different medications 3 times a day. John informed
            me that he has no knowledge of the medications he is taking or the times that they need to be taken and that he relies
            on his wife to remind him to take these medications. John is familiar with using an iPad, a smartphone and a desktop
            computer but is most confident using an iPad. John also informed me that the only access to a medication list he has is
            by asking his wife. John is slightly concerned that he would not know the names of the medications he is taking if someone
            asked him and without his wife reminding him to take them, he would not be efficient at taking the medications. John was
            excited about the prospect of being able to have some independence and a reliable source point for his medications and dosage
            information. John likes to travel for 6 months of the year and thinks that having an on-the-go tracker would be really
            beneficial and provide him with some reassurance when travelling to a non-English speaking country. His main request for
            the tracker was that it would be easy to insert the data into and very user friendly in general.
          </p>


          <h3 className={classes.title}>
            Interviewee 3 – Kendall Jones
          </h3>
          <p>
            Kendall is a 28-year-old nurse working in a seniors assisted living facility. Kendall’s day to day responsibilities involve
            assisting residents with any day-to-day challenges they may come into including anything both medical and physical related.
            Kendall informed me that she thinks the tracker would be beneficial for not only her but mostly for her patients. Kendall works
            with a range of residents, some who are able to keep track of their own medications and others who need assistance when it comes
            to administering medicines. She made it known that she believes the tracker would be brilliant for those who keep track of their
            own medications as it will give them more reassurance when it comes to remembering if they have taken their medicines. Kendall
            also mentioned that the tracker would be beneficial for the facility itself to be able to keep track of all its resident’s data
            in one electronic format and that it would allow them to communicate easier with the residents to ensure those who are independently
            responsible for their medications are taking what needs to be taken. Kendall said that most, if not all of the residents have their
            own personal smartphones but that they all have access to community iPads and computers if desired. This being said, she did make
            me aware that some residents are not comfortable using the devices and that she thinks they would be very hesitant to use the
            tracker and put their secure information in a database. When asking Kendall what the most important feature should be on the tracker,
            she mentioned that ensuring that all the data was secure would be a critical aspect if the facility was to implement it, for the
            individual users Kendall suggested that a user guide and tutorial video would be highly beneficial for her users.
          </p>


          <h3 className={classes.title}>
            Interviewee 4 – David Evans
          </h3>
          <p>
            David is a 48-year-old freelancer who lives with his 76-year-old mother who suffers from dementia. Although David does work as
            a freelancer when he has the time, his main priority is looking after his mom and ensuring her needs are met when it comes to
            her health. David’s mom is highly dependent on him and without him giving her, her medication, she would not be aware enough
            to take them. David’s mom currently takes 6 different medications, some of which are taken 3 times a day, others are taken once
            daily. David made me aware that he finds it incredibly challenging to ensure that his mom is being given the correct medication
            and dosage and that he currently keeps track by a written checklist that he often misplaces due to his hectic day-to-day tasks.
            As well as looking after his mother David also has his own medications to keep track of and admitted that it can get confusing
            and overwhelming from time to time.  In terms of technologies David has access to most, if not all technologies but says that
            his mother would not be able to use any at this stage in her life. David does have a list of medications that his mom is currently
            taking but due to her different health conditions the list is changing so frequently that he says it is hard to keep track of.
            When asked about the most important feature David said he would be really excited to receive personal reminders each time a
            medication is due to be administered and the ability to keep track of if the medication was administered or missed.
          </p>

          <br />
          <br />


        </GridItem>


      </GridContainer>
    </div>
  );
}
