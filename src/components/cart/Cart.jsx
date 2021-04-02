import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './cartitem/CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1" align="center" style={{marginTop: '14vh'}}>
      No items in cart.
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3} justify="center">
        {/* map through variants instead of entire items? */}
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails} align="center">
        <Typography variant="h6">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div className={classes.buttonDiv}>
          <Button className={classes.emptyButton} size="medium" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>
            Empty cart
          </Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="medium" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
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
