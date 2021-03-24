import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonBase, Select, MenuItem } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';

// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './productDetailsStyles';

const ProductDetails = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState('');
  const classes = useStyles();
  const { id } = useParams();

  const fetchProduct = async () => {
    const product = await commerce.products.retrieve(id);

    // console.log(data[id])
    setProduct(product);
  };

  let selectSize = (e) => {
    // setSize(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <main className={classes.content}>
        <Grid className={classes.grid}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media?.source} title={product.name} />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  ${product.price?.formatted}
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
              </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
              {product.variants?.map((variant) => (
                <Select onChange={(e) => setSize(e.target.value)}>
                  {variant.options.map((option) => (
                    <MenuItem value={option.name}>{option.name}</MenuItem>
                  ))}
                </Select>
              ))}
              <Button aria-label="Add to Cart" onClick={onAddToCart}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </main>
    </>
  );
};

export default ProductDetails;
