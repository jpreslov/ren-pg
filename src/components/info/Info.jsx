import React from "react";
import { Grid, ButtonGroup, Button, Label, SvgIcon, Typography } from "@material-ui/core";
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
        <Typography className="info" variant="h5">
          Rendezvous Printed Goods is an art project by Jake Lovett.
        </Typography>
        <Typography className="infoTwo" variant="subtext1">
          Drawing inspiration from many facets of media, I make every graphic and screen myself. Every shirt is made to order, and hand-printed in my
          apartment.
        </Typography>
        <div className="button-group">
          <Button className="Button" target="_blank" href="http://www.instagram.com/jp.lovett">
            <SvgIcon className="svgIcon" component={InstagramIcon} />
          </Button>
          <Button className="Button" href="mailto:jpreslov@gmail.com">
            <SvgIcon className="svgIcon" component={MailOutlineIcon} />
          </Button>
        </div>
      </div>
    </>
  );
  return isSafari ? safariInfo() : regularInfo();
};

export default Info;
