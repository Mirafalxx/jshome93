import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormElement from '../UI/Form/FormElement';
import ButtonWithProgress from '../UI/ButtonWithProgress/ButtonWithProgress';
import { useSelector } from 'react-redux';

const ProductForm = ({ onSubmit, loading, error }) => {
  const user = useSelector((state) => state.users.user._id);
  const [state, setState] = useState({
    title: '',
    description: '',
    user,
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });

    onSubmit(formData);
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getFieldError = (fieldName) => {
    try {
      return error.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };
  return (
    <form onSubmit={submitFormHandler} noValidate>
      <Grid container direction="column" spacing={2}>
        <FormElement
          required
          label="Title"
          name="title"
          value={state.title}
          onChange={inputChangeHandler}
          error={getFieldError('title')}
        />

        <FormElement
          multiline
          rows={3}
          label="Description"
          name="description"
          value={state.description}
          onChange={inputChangeHandler}
          error={getFieldError('description')}
        />
        <Grid item xs>
          <ButtonWithProgress type="submit" color="primary" variant="contained" loading={loading} disabled={loading}>
            Add Event
          </ButtonWithProgress>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
