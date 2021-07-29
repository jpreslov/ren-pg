import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonBase, Select, MenuItem, InputLabel } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';

// import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './productDetailsStyles';
import Carousel from 'react-material-ui-carousel';

const ProductDetails = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState(' ');
  const [variantGroupInfo, setVariantGroupInfo] = useState({ id: ' ', name: ' ' });
  const [optionInfo, setOptionInfo] = useState({ id: ' ', name: ' ' });
  const [disabled, toggleDisabled] = useState(true);
  const classes = useStyles();
  const { permalink } = useParams();

  const handleAddToCart = () => onAddToCart(product.id, 1, variantGroupInfo, optionInfo);

  const fetchProduct = async () => {
    const product = await commerce.products.retrieve(`${permalink}`, {type: 'permalink'});
    setProduct(product);
  };

  const multiplePics = () => (
    <Carousel className={classes.carousel} autoPlay={false} animation="slide">
      {product.assets.map((asset, id) => (
        <CardMedia key={id} className={classes.carouselPics} image={asset.url} title={product.name} />
      ))}
    </Carousel>
  );

  const singlePic = () => <img className={classes.media} src={product.media?.source} title={product.name} alt={product.name} />;

  const switchDisabled = () => {
    toggleDisabled(false);
  };

  const pickSizeToggleButton = (e) => {
    setSize(e.target.value);
    switchDisabled();
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <main className={classes.content}>
        <Grid className={classes.grid} item={true}>
          <Card className={classes.root}>
            {product.assets?.length > 1 ? multiplePics() : singlePic()}
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
                      <Select
                        label={variant_group.name}
                        defaultValue={" "}
                        onChange={(e) => {
                          pickSizeToggleButton(e);
                        }}
                        onClose={() => setVariantGroupInfo({ id: variant_group.id, name: variant_group.name })}
                      >
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
                <Button disabled={disabled} className={classes.button} aria-label="Add to Cart" onClick={handleAddToCart}>
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
