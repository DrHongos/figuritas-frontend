import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Nav />
        <Grid minH="100vh" p={3}>
          <Toaster />
          <VStack spacing={8}>
          <Switch>
            <Route path='/create'>
              <p>create</p>
            </Route>
            <Route path='/album/:albumCID'>
              <p>album</p>
            </Route>
            <Route path='/explore'>
              <p>explore</p>
            </Route>
            <Route path='/trade'>
              <p>Trade Court</p>
            </Route>
            <Route exact path='/myAlbums'>
              <p>my albums</p>
            </Route>

            <Route exact path='/'>
              <p>landing</p>
            </Route>
            <Redirect to="/" />
          </Switch>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
