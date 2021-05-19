import React from "react";
import { AppBar, Toolbar, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Usermenu from "./Menu/Usermenu";
import AnonymousMenu from "./Menu/AnonymousMenu";

const useStyles = makeStyles((theme) => ({
  mainLink: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "inherit",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  staticToolbar: {
    marginBottom: theme.spacing(2),
  },
}));

const AppToolbar = () => {
  const classes = useStyles();
  const user = false;
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">
                <Link to="/" className={classes.mainLink}>
                  Events
                </Link>
              </Typography>
            </Grid>
            <Grid item>{user ? <Usermenu /> : <AnonymousMenu />}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar} />
    </>
  );
};

export default AppToolbar;
