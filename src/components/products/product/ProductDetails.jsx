import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonBase, Select, MenuItem, InputLabel } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';

// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './productDetailsStyles';

const ProductDetails = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState('');
  const [variantId, setVariantId] = useState('');
  const classes = useStyles();
  const { id } = useParams();

  const handleAddToCart = () => onAddToCart(product.id, 1, variantId);

  const fetchProduct = async () => {
    const product = await commerce.products.retrieve(id);
    setProduct(product);
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
                <div>
                  <InputLabel>{variant.name}</InputLabel>
                  <Select label={variant.name} onChange={(e) => setSize(e.target.value)}>
                    {variant.options.map((option, index) => (
                      <MenuItem key={index} onClick={(index)=>{setVariantId(option.id)}}value={option.name}>{option.name}</MenuItem>
                    ))}
                  </Select>
                </div>
              ))}
              <Button className={classes.button} aria-label="Add to Cart" onClick={(size) => onAddToCart(size)}>
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
