import React from 'react';
import { AppBar, Toolbar, Button, MenuItem, Menu, Typography, ButtonGroup, Badge } from '@material-ui/core';
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
        <Typography component={Link} to="/" className={classes.title}>
          <img src={logo} alt="Rendezvous P.G." className={classes.image} />
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
            {totalItems === 0 ? (
              <Button className={classes.button} component={Link} to="/cart" aria-label="View cart" color="inherit">
                Cart
              </Button>
            ) : (
              <Button className={classes.button} component={Link} to="/cart" aria-label="View cart" color="inherit">
                Cart
                <Badge className={classes.badge} variant="standard" color="primary" badgeContent={totalItems}></Badge>
              </Button>
            )}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
