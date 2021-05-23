import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const ProductItem = ({ title, user, image, id }) => {
  const classes = useStyles();

  return (
    <Grid item xs sm md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardContent>
          <strong style={{ marginLeft: '10px' }}>Owner: {user} </strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={'/products/' + id}>
            <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductItem;
