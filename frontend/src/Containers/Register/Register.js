import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Button, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import FormElement from "../../Components/UI/Form/FormElement";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <Container component="section" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Sign up
        </Typography>
        <Grid container spacing={1} direction="column" component="form" noValidate>
          <FormElement
            required
            label="Email"
            type="text"
            name="email"
            autoComplete="new-email"
            // error={getFieldError("email")}
          />
          <FormElement
            required
            label="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            // error={getFieldError("password")}
          />
          <FormElement
            required
            label="Display Name"
            type="text"
            name="displayName"

            // error={getFieldError("displayName")}
          />
          <Grid item xs>
            <Button>Sign up</Button>
            {/* <ButtonWithProgress
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              loading={loading}
              disabled={loading}
            >
              Sign up
            </ButtonWithProgress> */}
          </Grid>
          <Grid item container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} variant="body2" to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Register;
