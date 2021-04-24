import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonBase, Select, MenuItem, InputLabel } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';

// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './productDetailsStyles';

const ProductDetails = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState('');
  const [variantGroupInfo, setVariantGroupInfo] = useState({ id: '', name: '' });
  const [optionInfo, setOptionInfo] = useState({ id: '', name: '' });
  const classes = useStyles();
  const { id } = useParams();

  const handleAddToCart = () => onAddToCart(product.id, 1, variantGroupInfo, optionInfo);

  const fetchProduct = async () => {
    const product = await commerce.products.retrieve(`${id}`);
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
                <Typography className={classes.text} gutterBottom>
                  {product.name}
                </Typography>
                <Typography className={classes.text} gutterBottom>
                  ${product.price?.formatted}
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary" />
              </div>
              <CardActions className={classes.cardActions}>
                <div className={classes.productInfo}>
                  {product.variant_groups?.map((variant_group, index) => (
                    <div className={classes.inputDiv} key={index}>
                      <InputLabel>{variant_group.name}</InputLabel>
                      <Select label={variant_group.name} onChange={(e) => setSize(e.target.value)} onClose={() => setVariantGroupInfo({ id: variant_group.id, name: variant_group.name })}>
                        {variant_group.options.map((option, index) => (
                          <MenuItem
                            key={index}
                            onClick={() => {
                              setOptionInfo({ id: option.id, name: option.name });
                            }}
                            value={option.name}
                            defaultValue="Select option"
                          >
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  ))}
                </div>
                <Button className={classes.button} aria-label="Add to Cart" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </main>
    </>
  );
};

export default ProductDetails;
