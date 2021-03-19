import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonBase } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';

// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './productStyles';

const Product = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const classes = useStyles();
  const { id } = useParams();

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();

    setProduct(data[`${id}`]);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <h1>Product</h1>
  );
};

{/* <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button aria-label="Add to Cart" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card> */}

export default Product;
