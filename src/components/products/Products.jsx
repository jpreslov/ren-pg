import React from 'react';
import { Grid } from '@material-ui/core';
// import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import { Product } from '../index';
import { Link } from 'react-router-dom';

// import Product from './product/Product';
import useStyles from './productsStyles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid className={classes.grid} container justify="center" spacing={6} xs={12} sm={6} md={10} lg={12} item={true}>
        {products.map((product, key) => (
          <Product key={key} permalink={product.permalink} product={product} />
        ))}
      </Grid>
    </main>
  );
};

export default Products;
