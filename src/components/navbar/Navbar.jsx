import React from 'react';
import { AppBar, Toolbar, Button, Badge, MenuItem, Menu, Typography, ButtonGroup } from '@material-ui/core';
// import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/ren-logo-2.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        {/* <Toolbar className={classes.toolBar}> */}
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Rendezvous P.G." className={classes.image} />
            {/* Rendezvous PG */}
          </Typography>
          <div className={classes.grow} />
        {/* </Toolbar> */}
        <Toolbar className={classes.title}>
            <ButtonGroup className={classes.buttonGroup} variant="text" color="primary" aria-label="2nd-nav">
              <Button className={classes.button} component={Link} to="/" aria-label="View products" color="inherit">
                Shop
              </Button>
              <Button className={classes.button} component={Link} to="/info" aria-label="Info" color="inherit">
                Info
              </Button>
              <Button className={classes.button} component={Link} to="/cart" aria-label="View cart" color="inherit">
                Cart
              </Button>
            </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
