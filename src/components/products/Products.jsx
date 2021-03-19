import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// import Product from './product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid className={classes.grid} container justify="space-around" spacing={4}>
        {products.map((product, id) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.link} to={`/${id}`} id={id}>
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
        ))}
      </Grid>
    </main>
  );
};

export default Products;
