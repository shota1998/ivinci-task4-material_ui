import React from 'react';
import {
  Typography,
  CardActions,
  CardContent,
  Grid,
  Card,
} from '@material-ui/core';

import useStyles from './CartItem.style';
import ChangeQuantityButton from './UI/ChangeQuantityButton.jsx';

const CartItem = ({ item, addItem, removeItem }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5'>
              {item.title}
            </Typography>
            <Typography className={classes.price}>
              ${item.value * item.quantity}
            </Typography>
            <Typography>(${item.value}/item)</Typography>
            <Typography>x {item.quantity}</Typography>
          </CardContent>
          <CardActions>
            <ChangeQuantityButton onClick={() => addItem(item)}>
              +
            </ChangeQuantityButton>
            <ChangeQuantityButton onClick={() => removeItem(item)}>
              -
            </ChangeQuantityButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default CartItem;
