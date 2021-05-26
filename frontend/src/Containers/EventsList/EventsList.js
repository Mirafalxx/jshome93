import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import EventsListItem from './EventsListItem';
import { fetchEventsListsRequest } from '../../store/actions/eventsListActions';

const useStyles = makeStyles((theme) => ({
  progress: {
    height: 200,
  },
}));

const EventsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.eventsLists.eventsListsLoading);
  const eventsList = useSelector((state) => state.eventsLists.eventsList);
  console.log(eventsList[0]);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchEventsListsRequest());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Events</Typography>
        </Grid>

        {user?.role === 'admin' && (
          <Grid item>
            <Button color="primary" component={Link} to="/events/new">
              Add product
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item container spacing={1}>
        {loading ? (
          <Grid container justify="center" alignItems="center" className={classes.progress}>
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        ) : (
          eventsList.map((eventsList) => (
            <EventsListItem
              key={eventsList._id}
              id={eventsList._id}
              title={eventsList.title}
              user={eventsList.user.displayName}
            />
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default EventsList;
