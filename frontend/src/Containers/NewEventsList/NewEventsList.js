import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProductForm from '../../components/ProductForm/ProductForm';
import { createEventsListRequest } from '../../store/actions/eventsListActions';

const NewEventsList = ({ history }) => {
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.products.createProductError);
  // const loading = useSelector((state) => state.products.createProductLoading);

  useEffect(() => {}, [dispatch]);

  const onProductFormSubmit = (eventsListData) => {
    dispatch(createEventsListRequest(eventsListData));
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <Typography variant="h4">New product</Typography>
      </Grid>
      <Grid item xs>
        <ProductForm onSubmit={onProductFormSubmit} />
      </Grid>
    </Grid>
  );
};

export default NewEventsList;
