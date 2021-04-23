import React, { useEffect, useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Input } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import useStyles from "./styles";
import { isSafari } from "react-device-detect";

import "./cartItemStyles.scss";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  // const [ qty, setQty ] = useState('')

  const classes = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  // if (isSafari) {
  //   return (
  //     <div className="cart-item">
  //       <HighlightOffIcon className="remove-button" onClick={() => handleRemoveFromCart(item.id)} />
  //       <img className="media" src={item.media.source} alt={item.name} />
  //       <div className="text">
  //         <h5 className="item-name">{item.name}</h5>
  //         <input className="qty-input" defaultValue={item.quantity} onChange={(e) => handleUpdateCartQty(item.id, e.target.value)} />
  //         {item.selected_options.map((selected_option) => {
  //           <h6 className="variant-info">
  //             {selected_option.group_name}: {selected_option.option_name}
  //           </h6>;
  //         })}
  //         <p className="line-total">{item.line_total.formatted_with_symbol}</p>
  //       </div>
  //       <div className="card-actions">
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <Card className={classes.cartItem}>
      <HighlightOffIcon className={classes.removeButton} onClick={() => handleRemoveFromCart(item.id)} />
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.text}>{item.name}</Typography>
        {item.selected_options.map((selected_option) => {
          isSafari ? (
            <h6>
              {selected_option.group_name}: {selected_option.option_name}
            </h6>
          ) : (
            <Typography variant="subtitle2">
              {selected_option.group_name}: {selected_option.option_name}
            </Typography>
          );
        })}
        <Typography variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Input className={classes.qtyInput} defaultValue={item.quantity} onChange={(e) => handleUpdateCartQty(item.id, e.target.value)} />
      </CardActions>
    </Card>
  );
};
// };

export default CartItem;
