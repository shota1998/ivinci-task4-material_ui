import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './AddCartButton.style';

const AddCartButton = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.actions}>
      <Button size='small' variant='outlined' color='primary'>
        {children}
      </Button>
    </div>
  );
};

export default AddCartButton;
