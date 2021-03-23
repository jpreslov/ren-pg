import React from 'react';
import { Grid, ButtonGroup, Button, SvgIcon } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

import useStyles from './styles';

const Info = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.grid}>
        <ButtonGroup>
          <Button>
            <SvgIcon component={InstagramIcon} target="_blank" href="instagram.com/jp.lovett" />
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};

export default Info;
