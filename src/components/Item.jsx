import React from 'react';
import {
  Typography,
  CardActions,
  CardContent,
  Grid,
  Card,
} from '@material-ui/core';

import useStyles from './Item.style';
import AddCartButton from './UI/AddCartButton.jsx';

const Item = ({ item, addItem }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5'>
            {item.title}
          </Typography>
          <Typography className={classes.price}>${item.value}</Typography>
          <Typography>{item.description}</Typography>
        </CardContent>
        <CardActions>
          <AddCartButton onClick={() => addItem(item)}>
            Add to Cart
          </AddCartButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
