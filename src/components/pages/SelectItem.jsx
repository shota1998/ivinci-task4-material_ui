import React from 'react';
import useStyles from './SelectItem.style';
import Item from '../Item.jsx';
import { Typography, Grid, Container } from '@material-ui/core';

const SelectItem = () => {
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
          Buy your favorite products
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SelectItem;
