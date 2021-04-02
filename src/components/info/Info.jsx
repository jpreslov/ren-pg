import React from 'react';
import { Grid, ButtonGroup, Button, SvgIcon } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

import useStyles from './styles';

const Info = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.grid} container justify="center" spacing={0} xs={12} sm={6} md={10} lg={12}>
        <ButtonGroup>
          <Button className={classes.button}>
            <a  target="_blank" href="instagram.com/jp.lovett">
            <SvgIcon className={classes.svgIcon} component={InstagramIcon} />
            </a>
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};

export default Info;
