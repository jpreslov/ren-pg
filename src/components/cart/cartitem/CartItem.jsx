import React, { useEffect, useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Input } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import useStyles from "./styles";
import { isSafari } from "react-device-detect";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className={classes.container}>
      <Card className={classes.cartItem}>
        <div className={classes.picAndButton}>
          <HighlightOffIcon className={classes.removeButton} onClick={() => handleRemoveFromCart(item.id)} />
          <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
        </div>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.text}>{item.name}</Typography>
          {item.selected_options.map((selected_option) => (
            <Typography className={classes.text} variant="subtitle2">
              {selected_option.group_name}: {selected_option.option_name}
            </Typography>
          ))}
          <Typography className={classes.text} variant="subtitle1">
            {item.line_total.formatted_with_symbol}
          </Typography>
          <Input className={classes.qtyInput} defaultValue={item.quantity} onChange={(e) => handleUpdateCartQty(item.id, e.target.value)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CartItem;
