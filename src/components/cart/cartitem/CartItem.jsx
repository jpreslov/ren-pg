import React, { useEffect, useState } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Input } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  // const [ qty, setQty ] = useState('')

  const classes = useStyles();
  
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return item.selected_options.map((selected_option) => {
    return (
      <Card className={classes.cartItem}>
        <HighlightOffIcon className={classes.removeButton} onClick={() => handleRemoveFromCart(item.id)}/>
        <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
            <Typography className={classes.text}>{item.name}</Typography>
            <Typography variant="subtitle2">
              {selected_option.group_name}: {selected_option.option_name}
            </Typography>
          <Typography variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Input className={classes.qtyInput} defaultValue={item.quantity} onChange={(e) => handleUpdateCartQty(item.id, e.target.value)}/>
         
        </CardActions>
      </Card>
    );
  });
};

export default CartItem;
