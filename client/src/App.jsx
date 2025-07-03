import { useState } from "react";
import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./assets/logo.png";
import memories from "./assets/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          <img src={memories} alt="memories" height="80" width="100" />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
