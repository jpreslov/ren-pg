import React, { useEffect, useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Input } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import useStyles from "./styles";
import { isSafari } from "react-device-detect";

import './cartItemStyles.scss'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  // const [ qty, setQty ] = useState('')

  const classes = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  if (isSafari) {
    return item.selected_options.map((selected_option) => {
      return (
        <div className="cart-item">
          <HighlightOffIcon className="remove-button" onClick={() => handleRemoveFromCart(item.id)} />
          <img src={item.media.source} alt={item.name} className={classes.media} />
          <div className={classes.div}>
            <h5 className="item-name">{item.name} asldkfjhas;odifhjas;ldifha</h5>
            <h6 className="variant-info">
              {selected_option.group_name}: {selected_option.option_name}
            </h6>
            <p className="line-total">{item.line_total.formatted_with_symbol}</p>
          </div>
          <div className={classes.cardActions}>
            <Input className={classes.qtyInput} defaultValue={item.quantity} onChange={(e) => handleUpdateCartQty(item.id, e.target.value)} />
          </div>
        </div>
      );
    });
  } else {
    return item.selected_options.map((selected_option) => {
      return <h1 style={{ marginTop: "30vh" }}>Not Safari</h1>;
    });
  }
};

export default CartItem;
