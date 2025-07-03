import { useState } from "react";
import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./assets/logo.png";
import memories from "./assets/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { CustomAppBar, CustomHeading, CustomImage } from "./styles";

const App = () => {
  return (
    <Container maxWidth="lg">
      <CustomAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          <CustomImage src={memories} alt="memories" height="60" width="200" />
        </Typography>
      </CustomAppBar>
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
