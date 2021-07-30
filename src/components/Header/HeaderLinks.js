import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";

import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import DescriptionIcon from '@material-ui/icons/Description';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ForumIcon from '@material-ui/icons/Forum';
import GestureIcon from '@material-ui/icons/Gesture';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SlideshowIcon from '@material-ui/icons/Slideshow';

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/my-med-track/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {/* <ListItem className={classes.listItem}>

      </ListItem>
      <ListItem className={classes.listItem}>

      </ListItem> */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Show More"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <DescriptionIcon className={classes.dropdownIcons} /> Concept Description
            </Link>,
            <Link to="/data-gathering" className={classes.dropdownLink}>
              <WidgetsIcon className={classes.dropdownIcons} /> Data Gathering
            </Link>,
            <Link to="/interviews" className={classes.dropdownLink}>
              <ForumIcon className={classes.dropdownIcons} /> Interviews
            </Link>,
            <Link to="/sketching-ideation" className={classes.dropdownLink}>
              <GestureIcon className={classes.dropdownIcons} /> Sketching and Ideation
            </Link>,
            <Link to="/prototyping-evaluation" className={classes.dropdownLink}>
              <LaptopMacIcon className={classes.dropdownIcons} /> Prototyping and Evaluation
            </Link>,
            <Link to="/presentation" className={classes.dropdownLink}>
              <SlideshowIcon className={classes.dropdownIcons} /> Presentation
            </Link>,

            // <Link to="/about-us" className={classes.dropdownLink}>
            //   <AccountBalance className={classes.dropdownIcons} /> About Us
            // </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
