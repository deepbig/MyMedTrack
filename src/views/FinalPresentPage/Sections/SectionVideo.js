import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardMedia from '@material-ui/core/CardMedia';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogHeader from "components/DialogHeader/DialogHeader";


import resketchingStyle from "assets/jss/my-med-track/views/presentationSections/ResketchingStyle.js";
import imagesStyles from "assets/jss/my-med-track/imagesStyles.js";

import video from 'assets/video/Group1_FinalPresentation.mp4';

const styles = {
  ...resketchingStyle,
  ...imagesStyles,
};

const useStyles = makeStyles(styles);

export default function SectionVideo() {
  const classes = useStyles();

  return (
    <div className={classNames(classes.section)}>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <video controls width="100%" align-items="center">
            <source src={video} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Grid>

      </Grid>
    </div>
  );
}
