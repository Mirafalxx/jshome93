import { Grid } from "@material-ui/core";
import React from "react";
import FormElement from "../UI/Form/FormElement";

const EventForm = () => {
  return (
    <form noValidate>
      <Grid container direction="column" spacing={2}>
        <FormElement required label="Event" name="event" />
        <FormElement required label="Description" name="Description" />
      </Grid>
    </form>
  );
};

export default EventForm;
