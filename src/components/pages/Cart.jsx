import React from 'react';

import useStyles from './Cart.style';
import CartItem from '../CartItem.jsx';
import { Typography, Grid, Container } from '@material-ui/core';

const Cart = () => {
  const classes = useStyles();
  const items = [
    {
      type: '0',
      id: '0',
      title: 'sampleTitle0',
      value: 3,
      description: 'sampleDescription0',
      quantity: 1,
    },
    {
      type: '0',
      id: '1',
      title: 'sampleTitle1',
      value: 5,
      description: 'sampleDescription1',
      quantity: 1,
    },
  ];

  return (
    <>
      <Container maxWidth='sm'>
        <Typography
          variant='h5'
          align='center'
          color='textSecondary'
          gutterBottom
        >
          Your Shopping Cart
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
