import React from 'react';
import { Button, Grid, Box, Heading } from "@chakra-ui/core"
import playSound from './utils/playsound';
import './App.css';

//Sounds
const click = require('./sounds/click.m4a');
const clickAudio = new Audio(click)

function App() {

  const handleClickOne = () => {
    playSound(clickAudio);
  }


  return (
    <div className="App">
      <Grid templateColumns="repeat(1, 1fr)" gap={2}>
      <Heading>UI Sounds</Heading>
      <Box bg="tomato" w="100%" p={4} color="white">
        <Button variantColor="green" onClick={handleClickOne}>Click me, please!</Button>
      </Box>
      </Grid> 
    </div>
  );
}

export default App;
