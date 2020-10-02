import React, {FunctionComponent, useState} from 'react';
import { Button, Grid, Box, Heading, Progress, useToast } from "@chakra-ui/core"
import playSound from './utils/playsound';
import mockupSaveRequest from './utils/mockup-request';
import './App.css';

//Sounds
const click = require('./sounds/click.wav');
const success = require('./sounds/success.wav');
const message = require('./sounds/message.wav');


const App:FunctionComponent = () => {
  let interval: any = null;
  
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Send files');
  const [counter, setCounter] = useState(0);
  const toast = useToast();

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();
  console.log(audioCtx)

  const handleClickOne = () => {
    playSound(new Audio(click));
  }

  const handleClickTwo = () => {
    const successAudio = new Audio(success);

    setLoading(true);
    startProgress();
    successAudio.play().then(()=> successAudio.pause()); // Due to auto-play restrictions, hack to play audio with promise on Safari/Mobile 
    mockupSaveRequest()
    .then(() => {
      setLoading(false);
      setButtonText("Sent!");
      stopProgress();
      successAudio.play().catch(console.error);
    })
    .catch(() => {})
  }

  const startProgress = () => {
    interval = setInterval(() => setCounter(prevState => prevState + 11), 200);
  }

  const stopProgress = () => {
    clearInterval(interval)
  }

  const handleClickThree = () => {
    toast({
      title: "New message",
      description: "Hello John! The article was...",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right"
    })
    playSound(new Audio(message));
  }

  return (
    <div className="App">
      <Grid templateColumns="repeat(1, 1fr)" gap={2}>
      <Box m="0 auto">
        <Heading as="h1" size="2xl" mb="40px" mt="40px">UI Sounds</Heading>
        <Box w="100%" p={4} mb="32px">
          <Heading as="h2" color="teal" mb="32px">1) Sound as action feedback (earcon)</Heading>
          <Button variantColor="purple" onClick={handleClickOne}>Click me</Button>
        </Box>
        <Box w="100%" p={4} mb="32px">
          <Heading as="h2" color="teal" mb="32px">2) Sound as hero (success)</Heading>
          <Button 
            variantColor="blue"
            onClick={handleClickTwo}
            isLoading={loading}
            loadingText="Sending..."
          >
            {buttonText}
          </Button>
          <Progress mt="16px" mb="16px" value={counter} />
        </Box>
        <Box w="100%" p={4} mb="32px">
          <Heading as="h2" color="teal" mb="32px">3) Sound as notification</Heading>
          <Button mb="16px" onClick={handleClickThree}>Show me</Button>
        </Box>
      </Box>
      </Grid> 
    </div>
  );
}

export default App;
