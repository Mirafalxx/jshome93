import { Grid, Typography } from "@material-ui/core";
import React from "react";
import EventForm from "../../Components/EventForm/EventForm";

const NewEvent = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <Typography variant="h6">New Event</Typography>
      </Grid>
      <Grid item xs>
        <EventForm />
      </Grid>
    </Grid>
  );
};

export default NewEvent;
