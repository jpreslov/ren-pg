import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./productStyles";
const download = require("image-downloader");

// import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product, onAddToCart, permalink }) => {
  const classes = useStyles();
  const placeholder = "";

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    product.assets?.map((asset) => {
      const options = {
        url: `${asset.url}`,
        dest: `./images/${asset.filename}`,
      };

      download.image(options)
        .then(({ filename }) => console.log(`Saved to ${filename}`))
        .catch((err) => console.error(err));
    });
  };
  return (
    <>
      <Link className={classes.link} to={`/${permalink}`}>
        <Card className={classes.root}>
          <img className={classes.media} src={product.media.source || placeholder} onError={(e) => (e.target.src = { placeholder })} title={product.name} alt={product.name} />
          {/* <CardMedia className={classes.media} image={product.media.source} title={product.name} /> */}
          <CardContent>
            <div className={classes.cardContent}>
              <Typography className={classes.text} gutterBottom variant="h6">
                {product.name}
              </Typography>
              <Typography className={classes.price} gutterBottom component="h6">
                {product.price.formatted_with_symbol}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default Product;
