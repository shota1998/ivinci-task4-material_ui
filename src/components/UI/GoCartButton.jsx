import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';

import useStyles from './GoCartButton.style';

const GoCartButton = () => {
  const classes = useStyles();

  return (
    <Link to='/cart' style={{ textDecoration: 'none' }}>
      <Button className={classes.button} size='small' variant='outlined'>
        <Typography>Cart</Typography>
        <Typography className={classes.badge}>2</Typography>
      </Button>
    </Link>
  );
};

export default GoCartButton;
