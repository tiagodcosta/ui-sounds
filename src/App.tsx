import React, {useState} from 'react';
import { Button, Grid, Box, Heading } from "@chakra-ui/core"
import playSound from './utils/playsound';
import mockupSaveRequest from './utils/mockup-request';
import './App.css';

//Sounds
const click = require('./sounds/click.m4a');
const success = require('./sounds/success.wav');
const clickAudio = new Audio(click);
const successAudio = new Audio(success);

function App() {

  const [loading, setLoading] = useState(false);
  const [ buttonText, setButtonText ] = useState('Publish article');

  const handleClickOne = () => {
    playSound(clickAudio);
  }

  const handleClickTwo = () => {
    setLoading(true)
    mockupSaveRequest()
    .then(() => {
      setLoading(false);
      setButtonText("Published!")
      playSound(successAudio);
    })
    .catch(() => {})
  }


  return (
    <div className="App">
      <Grid templateColumns="repeat(1, 1fr)" gap={2}>
      <Heading>UI Sounds</Heading>
      <Box w="100%" p={4}>
        <Heading as="h2" color="teal" mb="16px">1) Sound as action feedback (earcon)</Heading>
        <Button variantColor="green" onClick={handleClickOne}>Click me</Button>
      </Box>
      <Box w="100%" p={4}>
        <Heading as="h2" color="teal" mb="16px">2) Sound as hero (success)</Heading>
        <Button 
          variantColor="blue"
          onClick={handleClickTwo}
          isLoading={loading}
          loadingText="Publishing..."
        >
          {buttonText}
        </Button>
      </Box>
      </Grid> 
    </div>
  );
}

export default App;
