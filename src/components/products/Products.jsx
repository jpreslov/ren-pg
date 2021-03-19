import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import { Product } from '../index';
import { Link } from 'react-router-dom';

// import Product from './product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid className={classes.grid} container justify="space-around" spacing={4}>
        {products.map((product) => (
          <Product id={product.id} product={product} onAddToCart={onAddToCart()} />
        ))}
      </Grid>
    </main>
  );
};

export default Products;
