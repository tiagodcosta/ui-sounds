import React, {useState} from 'react';
import { Button, Grid, Box, Heading, List, ListIcon, ListItem, Progress, useToast } from "@chakra-ui/core"
import playSound from './utils/playsound';
import mockupSaveRequest from './utils/mockup-request';
import './App.css';

//Sounds
const click = require('./sounds/click.m4a');
const success = require('./sounds/success.wav');
const message = require('./sounds/message.wav');

const clickAudio = new Audio(click);
const successAudio = new Audio(success);
const messageAudio = new Audio(message);

function App() {

  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Send files');
  const [counter, setCounter] = useState(0);
  const toast = useToast();

  const handleClickOne = () => {
    playSound(clickAudio);
  }

  const handleClickTwo = () => {
    setLoading(true)
    interval();
    mockupSaveRequest()
    .then(() => {
      setLoading(false);
      playSound(successAudio);
      setButtonText("Received!")
    })
    .catch(() => {})
  }

  const interval = () => {
    setInterval(() => setCounter(prevState => prevState + 10), 200)
  }

  const handleClickFour = () => {
    toast({
      title: "New message",
      description: "Hello John! The article was...",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
    playSound(messageAudio);
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
          <Heading as="h2" color="teal" mb="32px">3) Sound as decoration</Heading>
          <Button mb="16px">Start</Button>
          <List spacing={3}>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon icon='check-circle' color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            </List>
        </Box>
        <Box w="100%" p={4} mb="32px">
          <Heading as="h2" color="teal" mb="32px">3) Sound as notification</Heading>
          <Button mb="16px" onClick={handleClickFour}>Show me</Button>
         
        </Box>
      </Box>
      </Grid> 
    </div>
  );
}

export default App;
