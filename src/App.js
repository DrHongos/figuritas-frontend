import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
} from '@chakra-ui/react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";
import AlbumPage from "./components/AlbumPage";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Nav />
          <Toaster />
          <VStack spacing={8}>
          <Switch>
            <Route path='/create'>
              <p>create</p>
            </Route>
            <Route path='/album/:albumCID'>
              <p>album</p>
              <AlbumPage />
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
              <div>
                <img alt="background" src="./assets/portadaFiguritas.png" width="100%" />
              </div>
            </Route>
            <Redirect to="/" />
          </Switch>
          </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
