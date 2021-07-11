import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// core components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogHeader from "components/DialogHeader/DialogHeader";

import sectionsStyle from "assets/jss/my-med-track/views/presentationSections/sectionsStyle.js";

// images array used in rendering a function for this section
import imgs from "assets/img/assets-sketches/imgs.js";

const useStyles = makeStyles(sectionsStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SectionSections() {
  const [open, setOpen] = React.useState(false);
  const [assetName, setAssetName] = React.useState("Screenshot1");

  const handleSketchesClick = (asset) => {
    setOpen(true);
    setAssetName(asset);
  }

  const renderContainerFluid = (cssClass) => {
    return imgs.map((row) => {
      return (
        <GridContainer key={row[0]}>
          {row.map((el, index) => {
            return (
              <GridItem
                md={3}
                sm={3}
                xs={12}
                key={el + index}
                className={cssClass}
              >
                <Button onClick={() => handleSketchesClick(el)}>
                  <img
                    src={
                      require(`assets/img/assets-sketches/${el}.png`)
                        .default
                    }
                    alt={el}
                    key={el[index]}
                  />
                </Button>

              </GridItem>
            );
          })}
        </GridContainer>
      );
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.sectionSections}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>Brainstorming Ideation Session and Sketches</h2>
              <h5 className={classes.description}>
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.containerFluid}>
        {renderContainerFluid(classes.photoGallery)}
        <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
          <DialogHeader
            title="Brainstorming Ideation Session and Sketches"
            fixed
            color="info"
            setOpen={setOpen}
          />
          <Card style={{ paddingTop: "50px" }} className={classes.imgCardExtended}>
            {assetName !== undefined || assetName !== null || assetName !== '' ?
              <>
                <img
                  src={
                    require(`assets/img/assets-sketches/${assetName}.png`).default
                  }
                  alt={assetName}
                  key={assetName}
                />
              </>
              : null

            }

          </Card>

        </Dialog>
      </div>

    </div>
  );
}
