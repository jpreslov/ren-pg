import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';

// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from '../styles';

const Product = ({ product, onAddToCart, id }) => {
  const classes = useStyles();


  return (
    <>
      <Grid item key={product.id} xs={12} sm={6} md={6} lg={6}>
        <Link className={classes.link} to={`/${id}`}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom component="h6">
                  {product.price.formatted_with_symbol}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default Product;
