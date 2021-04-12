import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './cartitem/CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  let history = useHistory();
  const classes = useStyles();

  const EmptyCart = () => (
    <>
      <div className={classes.emptyCartDiv}>
        <Typography variant="h6" align="center" style={{ marginTop: '5vh' }}>
          Your cart is empty
        </Typography>
        <Button className={classes.button} onClick={() => history.push('/')} type="button" variant="contained">
          Start Shopping
        </Button>
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <Grid className={classes.cartGrid1} container spacing={3} justify="center">
        {/* map through variants instead of entire items? */}
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails} justify="space-between">
        <Typography variant="h6">Subtotal:</Typography>
        <Typography variant="h6">{cart.subtotal.formatted_with_symbol}</Typography>
      </div>
      <div className={classes.buttonDiv}>
        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="medium" type="button" variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h6" gutterBottom>
        Your cart
      </Typography>
      {!cart.line_items.length ? EmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
