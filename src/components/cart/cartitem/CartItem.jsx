import React, { useEffect, useState } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const classes = useStyles();
  
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return item.selected_options.map((selected_option) => {
    return (
      <Card className={classes.cartItem}>
        <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography className={classes.text}>{item.name}</Typography>
            <Typography variant="subtitle1">
              {selected_option.group_name}: {selected_option.option_name}
            </Typography>
          </div>
          <Typography variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
              -
            </Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
              +
            </Button>
          </div>
          <Button className={classes.button} variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  });
};

export default CartItem;
