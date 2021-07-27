import React from "react";
import { Grid, ButtonGroup, Button, SvgIcon } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { isSafari } from "react-device-detect";
import "./infoStyles.scss";
import useStyles from "./styles";

const Info = () => {
  const classes = useStyles();

  const regularInfo = () => (
    <>
      <Grid className={classes.grid} container justify="center" spacing={0} xs={12} sm={12} md={10} lg={12}>
        <ButtonGroup className={classes.buttonGroup}>
          <Button className={classes.button} target="_blank" href="http://www.instagram.com/jp.lovett">
            <SvgIcon className={classes.svgIcon} component={InstagramIcon} />
          </Button>
          <Button className={classes.button} href="mailto:jpreslov@gmail.com">
            <SvgIcon className={classes.svgIcon} component={MailOutlineIcon} />
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
  const safariInfo = () => (
    <>
      <div className="container">
        <div className="button-group">
          <Button className="button" target="_blank" href="http://www.instagram.com/figureglow">
            <SvgIcon className={classes.svgIcon} component={InstagramIcon} />
          </Button>
          <Button className="button" href="mailto:jpreslov@gmail.com">
            <SvgIcon className={classes.svgIcon} component={MailOutlineIcon} />
          </Button>
        </div>
      </div>
    </>
  );
  return (isSafari ? safariInfo() : regularInfo())
};

export default Info;
