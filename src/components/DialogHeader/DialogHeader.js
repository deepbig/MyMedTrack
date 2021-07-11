import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/my-med-track/components/headerStyle";

const useStyles = makeStyles(styles);

export default function DialogHeader(props) {
  const classes = useStyles();

  const { color, title, fixed, absolute, setOpen } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          {title}
        </Button>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(false)}
        >
          <Close />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

DialogHeader.defaultProp = {
  color: "white",
};

DialogHeader.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  title: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
}