import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

const EventsListItem = ({ title, user, id }) => {
  const classes = useStyles();

  return (
    <Grid item xs sm md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardContent>
          <strong style={{ marginLeft: "10px" }}>Owner: {user} </strong>
        </CardContent>
      </Card>
    </Grid>
  );
};

EventsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EventsListItem;
