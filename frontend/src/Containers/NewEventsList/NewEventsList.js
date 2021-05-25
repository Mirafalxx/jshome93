import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProductForm from "../../Components/ProductForm/ProductForm";
import { createEventsListRequest } from "../../store/actions/eventsListActions";
import ButtonWithProgress from "../../Components/UI/ButtonWithProgress/ButtonWithProgress";
import FormElement from "../../Components/UI/Form/FormElement";

const NewEventsList = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user._id);
  console.log(user);
  const [state, setState] = useState({
    title: "",
    description: "",
    users: "",
  });

  const onProductFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createEventsListRequest(state));
  };
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <Typography variant="h4">New Event</Typography>
      </Grid>
      {/* <Grid item xs>
        <ProductForm onSubmit={onProductFormSubmit} />
      </Grid> */}
      <form onSubmit={onProductFormSubmit} noValidate>
        <Grid container direction="column" spacing={2}>
          <FormElement required label="Title" name="title" value={state.title} onChange={inputChangeHandler} />
          <FormElement required label="User" name="users" value={state.users} onChange={inputChangeHandler} />

          <FormElement
            multiline
            rows={3}
            label="Description"
            name="description"
            value={state.description}
            onChange={inputChangeHandler}
          />
          <Grid item xs>
            <ButtonWithProgress type="submit" color="primary" variant="contained">
              Add Event
            </ButtonWithProgress>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default NewEventsList;
